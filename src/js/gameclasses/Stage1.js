Stages.Stage1 = class Stage1 extends GameClasses.Stage {
    constructor(marbles) {
        super('', marbles)
        autoBind(this)
        this.stageName = Stages.Stage1.getStageName()
        this.addMap1()
        this.addMap2()
        this.addMap3()
    }

    static getStageName() {
        return '關卡一'
    }

    addMap1() {
        let map = new GameClasses.Map()
        this.addMap(map)
        let monster1 = new GameClasses.Monster({monsterID: 1, isBoss: false, HP: 100000, initPosition: {x: 190, y: 400}, attackCountdown: 1})
        let monster2 = new GameClasses.Monster({monsterID: 1, isBoss: false, HP: 100000, initPosition: {x: 930, y: 400}, attackCountdown: 1})
        let monster3 = new GameClasses.Monster({monsterID: 1, isBoss: false, HP: 100000, initPosition: {x: 190, y: 1100}, attackCountdown: 1})
        let monster4 = new GameClasses.Monster({monsterID: 1, isBoss: false, HP: 100000, initPosition: {x: 930, y: 1100}, attackCountdown: 1})
        map.addMonster(monster1)
        map.addMonster(monster2)
        map.addMonster(monster3)
        map.addMonster(monster4)
    }

    addMap2() {
        let map = new GameClasses.Map()
        this.addMap(map)
        let monster1 = new GameClasses.Monster({monsterID: 1, isBoss: false, HP: 100000, initPosition: {x: 540, y: 400}, attackCountdown: 1})
        let monster2 = new GameClasses.Monster({monsterID: 1, isBoss: false, HP: 100000, initPosition: {x: 540, y: 1100}, attackCountdown: 1})
        let monster3 = new GameClasses.Monster({monsterID: 1, isBoss: false, HP: 100000, initPosition: {x: 190, y: 750}, attackCountdown: 1})
        let monster4 = new GameClasses.Monster({monsterID: 1, isBoss: false, HP: 100000, initPosition: {x: 890, y: 750}, attackCountdown: 1})
        map.addMonster(monster1)
        map.addMonster(monster2)
        map.addMonster(monster3)
        map.addMonster(monster4)
    }

    addMap3() {
        let map = new GameClasses.Map()
        this.addMap(map)
        let monster1 = new GameClasses.Monster({monsterID: 239, isBoss: true, HP: 400000, initPosition: {x: 540, y: 960}, attackCountdown: 1})
        map.addMonster(monster1)
    }
}