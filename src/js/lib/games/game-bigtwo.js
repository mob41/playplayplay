var Game = require("../game");
var Sizes = require("./bigtwo/sizes");
var Card = require("./bigtwo/card");
var Combination = require("./bigtwo/combination");
var FindCombinations = require("./bigtwo/findCombinations");
var makeCombination = require("./bigtwo/makeCombination");

const PLAYER_TIMER = 20000;

const LAST_CARD_LIMIT = 6;
const SEPARATE_NORMAL_HANDS_LIMIT = 5;
const SEPARATE_FIVE_CARD_HANDS_LIMIT = 4;

class BigTwoGame extends Game {

    constructor(party) {
        super("bigtwo", party);
        this.fc = new FindCombinations();
        this.allPlayersReadyList = {};
        this.awaitAi = [];
    }

    getMinimumPlayers() {
        return 4;
    }

    getMaximumPlayers() {
        return 4;
    }

    isNewPlayersAllowed() {
        return false;
    }

    isGameStarted() {
        return this.gameStarted;
    }

    isGameOver() {
        return this.gameOver;
    }

    startGame() {
        this.gameStarted = true;
        this.lastCombination = false;

        this.makeDeck();
        var i;
        var firstCard;
        var diamondThreePlayer;
        var player;
        var id;
        for (i = 0; i < 4; i++) {
            player = this.party.players[i];
            id = player.id;
            this.sendDeck(player, this.playerDecks[id]);
            firstCard = this.playerDecks[id][0];
            if (firstCard.suit === "diamonds" && firstCard.rank === "3") {
                diamondThreePlayer = this.party.players[i];
            }
        }
        this.setTurn(diamondThreePlayer);
        this.broadcastNumberOfCards();
        this.waitAllPlayersReady();
    }

    waitAllPlayersReady() {
        this.allPlayersReadyList = {};
    }

    isAllPlayersReady() {
        var i;
        var player;
        var partyPlayers = this.party.players;
        for (i = 0; i < 4; i++) {
            player = partyPlayers[i];
            if (player.online && !this.allPlayersReadyList[player.id]) {
                return false;
            }
        }
        return true;
    }

    sendDeck(player, deck) {
        player.sendGameEvent({
            event: "newDeck",
            deck: deck
        });
    }

    updateDeck(player, cards) {
        player.sendGameEvent({
            event: "updateDeck",
            cards: cards
        });
    }

    makeDeck() {
        this.playerDecks = {};
        this.deck = []; 
        var i;
        var x;
        for (i = 0; i < Sizes.SUIT.length; i++) {
            for (x = 0; x < Sizes.RANK.length; x++) {
                this.deck.push(new Card(Sizes.SUIT[i], Sizes.RANK[x]));
            }
        }

        var currentIndex;
        var randomIndex;
        var tmp;
        for (i = 0; i < 100; i++) {
            currentIndex = this.deck.length;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                tmp = this.deck[currentIndex];
                this.deck[currentIndex] = this.deck[randomIndex];
                this.deck[randomIndex] = tmp;
            }
        }

        var playerDeck;
        var cardIndex
        for (i = 0; i < 4; i++) {
            playerDeck = [];
            for (x = 0; x < 13; x++) {
                cardIndex = Math.floor(Math.random() * this.deck.length);
                playerDeck.push(this.deck[cardIndex]);
                this.deck.splice(cardIndex, 1);
            }
            this.fc.sortByRank(playerDeck);
            this.playerDecks[this.party.players[i].id] = playerDeck;
        }
    }

    cardNextTurn() {
        var partyPlayers = this.party.players;
        var currIndex = -1;
        var i;
        for (i = 0; i < partyPlayers.length; i++) {
            if (partyPlayers[i].id === this.turnPlayer.id) {
                currIndex = i;
                break;
            }
        }

        var nextTurnPlayer = this.party.players[(currIndex + 1) % 4];
        this.setTurn(nextTurnPlayer);
    }

    enable() {
        this.gameOver = false;
    }

    disable() {
        clearTimeout(this.timeout);
        clearTimeout(this.playerTimeout);
    }

    isCardsInDeck(deck, cards) {
        var i;
        var j;
        var found;
        for (i = 0; i < cards.length; i++) {
            found = false;
            for (j = 0; j < deck.length; j++) {
                if (cards[i].equals(deck[j])) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                return false;
            }
        }
        return true;
    }

    /*
    removeCardsFromDeck(deck, cards) {

    }
    */
    
    removeCardsFromDeck(deck, cards) {
        var i;
        var j;
        var found;
        for (i = 0; i < cards.length; i++) {
            found = false;
            for (j = 0; j < deck.length; j++) {
                if (cards[i].equals(deck[j])) {
                    found = true;
                    deck.splice(j, 1);
                    break;
                }
            }
            if (!found) {
                return false;
            }
        }
        return true;
    }

    broadcastNumberOfCards() {
        var numberOfCards = {};
        for (var key in this.playerDecks) {
            numberOfCards[key] = this.playerDecks[key].length;
        }
        this.party.broadcastGameEvent({
            event: "numberOfCards",
            numberOfCards: numberOfCards
        });
    }

    broadcastLastCards() {
        this.party.broadcastGameEvent({
            event: "lastCards",
            player: this.lastPlayer.getDescriptor(),
            cards: this.lastCombination.cards
        });
    }

    broadcastLastPassed(player) {
        this.party.broadcastGameEvent({
            event: "lastPassed",
            player: player.getDescriptor()
        });
    }

    broadcastGameOver() {
        var array = [];
        for (var key in this.playerDecks) {
            array.push({
                playerId: key,
                length: this.playerDecks[key].length
            });
        }
        array.sort((a, b) => {
            return a.length - b.length;
        });
        this.party.broadcastGameEvent({
            event: "gameOver",
            winner: this.lastPlayer.getDescriptor(),
            lastCombination: this.lastCombination,
            playerDecks: this.playerDecks,
            ranking: array
        });
    }

    broadcastGameReady() {
        clearTimeout(this.playerTimeout);
        var serverTime = Date.now();

        this.party.broadcastGameEvent({
            event: "gameReady",
            serverTime: serverTime,
            timeout: PLAYER_TIMER
        });

        this.playerTimeout = setTimeout(() => {
            this.request(this.turnPlayer, this.onAi(this.turnPlayer));
        }, PLAYER_TIMER);

        this.processAwaitAiRequests();
    }

    processAwaitAiRequests() {
        this.timeout = setTimeout(() => {
            if (this.isAllPlayersReady()) {
                this.runAwaitAiRequest();
            } else {
                this.processAwaitAiRequests();
            }
        }, 1000);
    }

    runAwaitAiRequest() {
        if (this.awaitAi.length > 0) {
            var player = this.awaitAi.shift();
            var req = this.aiLogic(player);
            this.request(player, req);
        }
    }

    onRequest(player, req) {
        if (!req) {
            return;
        }
        if (!this.gameOver) {
            if (req.event === "gameReady") {
                this.allPlayersReadyList[player.id] = true;
                if (this.isAllPlayersReady()) {
                    this.broadcastGameReady();
                }
            } else if (this.turnPlayer && this.turnPlayer.id === player.id) {
                if (!this.isAllPlayersReady()) {
                    player.sendGameEvent({
                        event: "requestFailed",
                        code: -1,
                        msg: "Players are not ready."
                    });
                    return;
                }

                if (req.event === "hint") {
                    var resp = this.aiLogic(player);
                    player.sendGameEvent({
                        event: "roundHint",
                        hint: resp
                    });
                } else if (req.event === "turn" || req.event === "pass") {
                    clearTimeout(this.playerTimeout);
                    this.waitAllPlayersReady();

                    if (req.event === "turn") {
                        var cards = this.fc.jsonToCards(req.cards);

                        var turnDeck = this.fc.cardsToDeck(cards);

                        var deck = this.playerDecks[player.id];

                        if (!this.isCardsInDeck(deck, turnDeck)) {
                            player.sendGameEvent({
                                event: "turnFailed",
                                code: -1,
                                msg: "You do not have such cards in deck."
                            });
                            return;
                        }

                        var combination = makeCombination(turnDeck);

                        if (!combination) {
                            player.sendGameEvent({
                                event: "turnFailed",
                                code: -2,
                                msg: "Invalid turn cards combination."
                            });
                            return;
                        }

                        if (!this.lastCombination) {
                            var d3Found = false;
                            for (var card of turnDeck) {
                                if (card.suit === "diamonds" && card.rank === "3") {
                                    d3Found = true;
                                    break;
                                }
                            }

                            if (!d3Found) {
                                player.sendGameEvent({
                                    event: "turnFailed",
                                    code: -3,
                                    msg: "The first turn cards must include a Diamond-3 card."
                                });
                                return;
                            }
                        } else if (this.lastPlayer.id !== player.id) {
                            if (combination.combinationName !== this.lastCombination.combinationName) {
                                player.sendGameEvent({
                                    event: "turnFailed",
                                    code: -5,
                                    msg: "The card combination type has to be the same as the last combination."
                                });
                                return;
                            }

                            var compare = combination.compare(this.lastCombination);

                            if (compare <= 0) {
                                player.sendGameEvent({
                                    event: "turnFailed",
                                    code: -6,
                                    msg: "The card combination has to be bigger than the last combination."
                                });
                                return;
                            }
                        }

                        if (!this.removeCardsFromDeck(deck, turnDeck)) {
                            player.sendGameEvent({
                                event: "turnFailed",
                                code: -7,
                                msg: "Cards removal unsuccessful."
                            });
                            return;
                        }

                        this.updateDeck(player, cards);

                        this.lastPlayer = player;
                        this.lastCombination = combination;

                        this.broadcastLastCards();
                        this.broadcastNumberOfCards();

                        player.sendGameEvent({
                            event: "turnSuccess"
                        });

                        if (deck.length === 0) {
                            this.gameOver = true;
                            this.broadcastGameOver();
                            this.endGame();
                        } else {
                            this.cardNextTurn();
                        }
                        return;
                    } else if (req.event === "pass") {
                        player.sendGameEvent({
                            event: "passSuccess"
                        });
                        this.broadcastLastPassed(player);
                        this.cardNextTurn();
                    }
                }
            }
        }
    }

    containsLastCard(deck, comb) {
        var i;
        for (i = 0; i < comb.length; i++) {
            if (comb[i].index === deck.length - 1) {
                return true;
            }
        }
        return false;
    }

    getMinimumRemainingCards() {
        var min = -1;
        var len;
        for (var key in this.playerDecks) {
            len = this.playerDecks[key].length;
            if (min === -1 || min > len) {
                min = len;
            }
        }
        return min;
    }

    isDuplicateOtherHands(avaCombs, targetComb) {
        var i;
        var j;
        var x;
        var comb;
        var combs;
        var noDuplicate;

        var indexes = [];
        for (i = 0; i < targetComb.length; i++) {
            indexes.push(targetComb[i].index);
        }

        var currMin = this.getMinimumRemainingCards();
        
		var same;
        var hasNoDupComb;
        var dup;
        var key;
        for (i = Sizes.ALL_COMBINATIONS.length - 1; i >= 0; i--) {
            key = Sizes.ALL_COMBINATIONS[i];
            combs = avaCombs[key];

            if (key === "flush") {
                //TODO: Skip handling by now
                continue;
            }

            if (Sizes.FIVE_CARD_HANDS.includes(key) &&
                currMin <= SEPARATE_FIVE_CARD_HANDS_LIMIT) {
                continue;
            }

            if (Sizes.COMBINATIONS.includes(key) &&
                currMin <= SEPARATE_NORMAL_HANDS_LIMIT) {
                continue;
            }

            if (combs.length > 0) {
                hasNoDupComb = false;
                for (j = 0; j < combs.length; j++) {
                    comb = combs[j];

					same = 0;
                    dup = false;
                    for (x = 0; x < comb.length; x++) {
						if (targetComb.length === comb.length && comb[x].index === targetComb[x].index){
							same++;
						}
						
                        if (indexes.includes(comb[x].index)) {
                            dup = true;
                            //break;
                        }
                    }
					
					if (same === comb.length){
						hasNoDupComb = true;
						break;
					}

                    if (!dup) {
                        hasNoDupComb = true;
                    }
                }

                if (!hasNoDupComb) {
                    return true;
                }
            }
        }
        return false;
    }

    aiLogic(player) {
        var deck = this.playerDecks[player.id];

        var reqCombName = false;

        var avaCombs = this.fc.findAll(deck);

        if (this.lastCombination && this.lastPlayer && this.lastPlayer.id !== player.id) {
            reqCombName = this.lastCombination.combinationName;
        } else {
            if (!this.lastCombination && !this.lastPlayer) {
                var i;
                var j;
                var k;
                var combs;
                var comb;
                var applicable;
                for (i = Sizes.ALL_COMBINATIONS.length - 1; i >= 0; i--) {
                    combs = avaCombs[Sizes.ALL_COMBINATIONS[i]];
                    for (j = 0; j < combs.length; j++) {
                        comb = combs[j];
                        applicable = false;
                        for (k = 0; k < comb.length; k++) {
                            if (comb[k].index === deck.length - 1) {
                                applicable = false;
                                break;
                            }

                            if (comb[k].card.suit === "diamonds" && comb[k].card.rank === "3") {
                                applicable = true;
                            }
                        }

                        if (applicable) {
                            return {
                                event: "turn",
                                cards: combs[j]
                            };
                        }
                    }
                }

                return {
                    event: "turn",
                    cards: [{
                        index: 0,
                        card: deck[0]
                    }]
                };
            }

            var i;
            var j;
            var combs;
            var minCards = this.getMinimumRemainingCards();
            for (i = Sizes.ALL_COMBINATIONS.length - 1; i >= 0; i--) {
                combs = avaCombs[Sizes.ALL_COMBINATIONS[i]];

                if (combs.length === 0) {
                    continue;
                }

                for (j = 0; j < combs.length; j++) {
                    if (minCards > LAST_CARD_LIMIT &&
                        this.containsLastCard(deck, combs[j])) {
                        continue;
                    } else if (this.isDuplicateOtherHands(avaCombs, combs[j])) {
                        continue;
                    } else {
                        return {
                            event: "turn",
                            cards: combs[j]
                        };
                    }
                }
            }
            
            return {
                event: "turn",
                cards: [{
                    index: 0,
                    card: deck[0]
                }]
            };
        }

        if (reqCombName === "single") {
            var lastCard = this.lastCombination.cards[0];
            var selectedCard = false;
            var i;
            var card;
            for (i = 0; i < deck.length; i++) {
                card = deck[i];
                if (card.compare(lastCard) > 0) {
                    selectedCard = {
                        index: i,
                        card: card
                    };
                    break;
                }
            }

            if (selectedCard) {
                var minCards = this.getMinimumRemainingCards();
                if ((minCards > LAST_CARD_LIMIT &&
                     this.containsLastCard(deck, [selectedCard])) ||
                    this.isDuplicateOtherHands(avaCombs, [selectedCard])
                ) {
                    return {
                        event: "pass"
                    };
                }

                return {
                    event: "turn",
                    cards: [
                        selectedCard
                    ]
                };
            } else {
                return {
                    event: "pass"
                };
            }
        } else if (reqCombName === "pair" || reqCombName === "threeOfAKind") {
            var matches = avaCombs[reqCombName];

            if (matches.length === 0) {
                return {
                    event: "pass"
                };
            }

            var selectedMatch = this.findMatchLargerThanCombination(matches, this.lastCombination);

            if (selectedMatch) {
                var minCards = this.getMinimumRemainingCards();
                if ((minCards > LAST_CARD_LIMIT &&
                    this.containsLastCard(deck, selectedMatch)) ||
                    this.isDuplicateOtherHands(avaCombs, selectedMatch)
                ) {
                    return {
                        event: "pass"
                    };
                }

                return {
                    event: "turn",
                    cards: selectedMatch
                }
            } else {
                return {
                    event: "pass"
                };
            }
        } else {
            var startIndex = Sizes.FIVE_CARD_HANDS.indexOf(this.lastCombination.fiveCardName);
            var i;
            var selectedMatch;
            var matches;
            var minCards = this.getMinimumRemainingCards();
            for (i = startIndex; i < Sizes.FIVE_CARD_HANDS.length; i++) {
                matches = avaCombs[Sizes.FIVE_CARD_HANDS[i]];

                if (matches.length === 0) {
                    return {
                        event: "pass"
                    };
                }

                selectedMatch = this.findMatchLargerThanCombination(matches, this.lastCombination);

                if (selectedMatch) {
                    if ((minCards > LAST_CARD_LIMIT &&
                        this.containsLastCard(deck, selectedMatch)) ||
                        this.isDuplicateOtherHands(avaCombs, selectedMatch)
                    ) {
                        return {
                            event: "pass"
                        };
                    }

                    return {
                        event: "turn",
                        cards: selectedMatch
                    }
                }
            }

            return {
                event: "pass"
            };
        }
    }

    findMatchLargerThanCombination(matches, combination) {
        var selectedMatch = false;
        var i;
        var comb;
        for (i = 0; i < matches.length; i++) {
            comb = makeCombination(this.fc.cardsToDeck(matches[i]));
            if (comb.compare(combination) > 0) {
                selectedMatch = matches[i];
            }
        }
        return selectedMatch;
    }

    onAi(player) {
        if (!this.isAllPlayersReady()) {
            this.awaitAi.push(player);
        } else {
            return this.aiLogic(player);
        }
    }

}

module.exports = BigTwoGame;