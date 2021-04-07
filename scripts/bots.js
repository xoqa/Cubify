function Bot(playstyle, name, difficulty) {
	this.playstyle = playstyle
	this.name = name
	this.difficulty = difficulty
	this.bet = 0;
	this.betitems = [];
	this.updatebet = function() {
		this.bet = 0;
		for (i=0; this.betitems.length > i; i++) {
			this.bet += this.betitems[i].cube.price
		}
	}
	switch (this.difficulty) {
		case "Normal":
			normalbots.push(this)
			break;
		case "Tough":
			toughbots.push(this)
			break;
		case "Hard":
			hardbots.push(this)
			break;
		case "Very Hard":
			veryhardbots.push(this)
			break;
		case "Expert":
			expertbots.push(this)
			break;
		case "Elite":
			elitebots.push(this)
			break;
		default:
		unknownbots.push(this)
	}
	switch (this.playstyle) {
		case "sniper":
			sniperbots.push(this)
			break;
		case "fair":
			fairbots.push(this)
			break;
		case "lowballer":
			lowballerbots.push(this)
			break;
		case "cf":
			cfbots.push(this)
			break;
	}
	this.botid=botid
	botid++
	allbots.push(this)
}
botid=0

allbots = []
unknownbots = []
normalbots = []
toughbots = []
hardbots = []
veryhardbots = []
expertbots = []
elitebots = []

sniperbots = []
fairbots = []
lowballerbots = []
cfbots = []

function resetallbotbets() {
	for (i=0; i < allbots.length; i++) {
		allbots[i].bet = 0
	}
}
function resetallbotitems() {
	for (i=0; i < allbots.length; i++) {
		allbots[i].betitems = []
	}
}
// Bot Declarations
//elite
cliffe = new Bot('fair', 'Gray (&beta;)', "Elite")
crusher = new Bot('fair', 'Jaden (&beta;)', "Elite")
jackson = new Bot('fair', 'sdoma (&beta;)', "Elite")
breach = new Bot('lowball', 'woqa (&beta;)', "Elite")

