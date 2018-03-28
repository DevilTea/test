Framework.Matter = class MatterUtil {
        constructor() {
            this.engine = Matter.Engine.create()
            this.world = this.engine.world
            this.render = Matter.Render.create({
                element: Framework.Game.canvasContainer,
                canvas: Framework.Game.canvas,
                engine: this.engine,
                options: {
                    width: Framework.Config.canvasWidth,
                    height:Framework.Config.canvasHeight,
                    wireframes: true
                }
            })
        }

        startRenderWireframes() {
            Matter.Render.run(this.render)
        }

        stopRenderWireframes() {
            Matter.Render.stop(this.render)
        }

        createRectangleBody(originX, originY, width, height, options) {
            let body = Matter.Bodies.rectangle(originX, originY, width, height, options)
            Matter.World.add(this.world, body)
            return body
        }

        createCircleBody(originX, originY, radius, options) {
            let body = Matter.Bodies.circle(originX, originY, radius, options)
            Matter.World.add(this.world, body)
            return body
        }

        removeBody(body) {
            Matter.Composite.remove(this.world, body)
        }

        setBody(body, settings, value) {
            Matter.Body.set(body, settings, value)
        }

        scaleBody(body, scaleX, scaleY){
            Matter.Body.scale(body, scaleX, scaleY)
        }

        addEventListener(eventName, callback) {
            Matter.Events.on(this.engine, eventName, callback)
        }

        update() {
            Matter.Engine.update(this.engine, 1000 / Framework.Config.fps, 1)
        }
    }