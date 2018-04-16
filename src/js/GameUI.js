GameClasses.GameUI = class GameUI {
    constructor() {
        autoBind(this)
        this.arrowOption = {canDraw: false, arrowType: 0, position: {x: 0, y: 0}, angle: 0, length: 0}
        this.arrowSprites = []
        this.playerInfoUIOption = {marbleIDs: [], nowMarble: 0, hpBar: {}}
        this.playerInfoUISprites = {UI: undefined, marbleSmallSprites: []}
        this.playerInfoUIHtmlElements = {marbleSmallHtmlElements: []}
    }

    loadArrow() {
        let arrowRebound = new Framework.Sprite(imagePath + 'UI/arrow_rebound.png')
		let arrowPenetrate = new Framework.Sprite(imagePath + 'UI/arrow_penetrate.png')
		let arrowRebound_2 = new Framework.Sprite(imagePath + 'UI/arrow_rebound_2.png')
        let arrowPenetrate_2 = new Framework.Sprite(imagePath + 'UI/arrow_penetrate_2.png')
        this.arrowSprites = [arrowRebound, arrowPenetrate, arrowRebound_2, arrowPenetrate_2]
    }

    initializeArrow() {
        this.arrowSprites.forEach((sprite) => sprite.initTexture())
    }

    drawArrow(ctx) {
        if(this.arrowOption.canDraw) {
            this.arrowSprites[this.arrowOption.arrowType].position = this.arrowOption.position
            this.arrowSprites[this.arrowOption.arrowType].rotation = this.arrowOption.angle
            this.arrowSprites[this.arrowOption.arrowType].scale.x = this.arrowOption.length / this.arrowSprites[this.arrowOption.arrowType].texture.width
            this.arrowSprites[this.arrowOption.arrowType].draw(ctx)
        }
    }

    loadPlayerInfoUI() {
        this.playerInfoUISprites.UI = new Framework.Sprite(imagePath + 'UI/player_info_UI.png')
        this.playerInfoUISprites.UI.position = {x: 540, y: 1708.5}
        this.playerInfoUIOption.marbleIDs.forEach((marbleID) => this.playerInfoUISprites.marbleSmallSprites.push(new Framework.Sprite(imagePath + 'marble/Small' + marbleID + '.jpg')))
    }

    initializePlayerInfoUI() {
        this.playerInfoUISprites.UI.initTexture()
        this.playerInfoUISprites.marbleSmallSprites.forEach((marbleSmall, index) => {
            marbleSmall.initTexture()
            let newHtmlElement = Framework.HtmlElementUI.createElement(10 + index * 205, 1600, 205, 205,  marbleSmall.texture)
            this.playerInfoUIHtmlElements.marbleSmallHtmlElements.push(newHtmlElement)
            Framework.HtmlElementUI.attachElement(newHtmlElement)
        })
    }

    drawPlayerInfoUI(ctx) {
        ctx.fillStyle = "black"
        ctx.fillRect(170, 1542, 855, 30)
        ctx.fillStyle = "green"
        ctx.fillRect(170, 1542, 855, 30)
        this.playerInfoUISprites.UI.draw(ctx)
        this.playerInfoUIHtmlElements.marbleSmallHtmlElements.forEach((htmlElement) => htmlElement.create())
        this.playerInfoUIHtmlElements.marbleSmallHtmlElements.forEach((htmlElement, index) => {
            htmlElement.resize()
            let previousPosition = htmlElement.position
            if(index === this.playerInfoUIOption.nowMarble) {
                htmlElement.position = {x: previousPosition.x, y: 1580}
            } else {
                htmlElement.position = {x: previousPosition.x, y: 1600}
            }
        })
    }

    drawDamageValue(ctx, value, position) {
        ctx.font = '60px Arial'
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'
        ctx.fillText(value, position.x, position.y)
    }

    drawBossHp(ctx, toMinus, currentValue, maxValue, position, width, height) {
        let valueLeft = Math.max(currentValue - toMinus, 0)
        ctx.fillStyle = "black"
        ctx.fillRect(position.x, position.y, width, height)
        ctx.fillStyle = "red"
        ctx.fillRect(position.x, position.y, currentValue / maxValue * width, height)
        ctx.fillStyle = "green"
        ctx.fillRect(position.x, position.y, valueLeft / maxValue * width, height)
        ctx.font = '60px Arial'
        ctx.fillStyle = 'white'
        ctx.textAlign = 'center'
        ctx.fillText(valueLeft + "/" + maxValue, 540, 60)
    }
}