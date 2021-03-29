function generateBetween(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

new Vue({
    el: "#app",
    data: {
        player: {
            label: 'Player',
            hp: 100
        },
        monster: {
            label: 'Monster',
            hp: 100
        },
        log: [],
        showActions: true
    },
    methods: {
        attack() {
            this.monster.hp -= loginfo = generateBetween(5, 10)
            this.monster.hp < 0 ? 
                (this.monster.hp = 0) || (this.showActions = false) : null
            this.log.push(`player hit monster with ${loginfo}`)
            this.player.hp -= loginfo = generateBetween(7, 12)
            this.player.hp < 0 ? 
                (this.player.hp = 0) || (this.showActions = false) : null
            this.log.push(`monster hit player with ${loginfo}`)
        },
        special() {
            this.monster.hp -= loginfo = generateBetween(9, 14)
            this.monster.hp < 0 ? 
                (this.monster.hp = 0) || (this.showActions = false) : null
            this.log.push(`player hit monster with ${loginfo}`)
            this.player.hp -= loginfo = generateBetween(7, 12)
            this.player.hp < 0 ? 
                (this.player.hp = 0) || (this.showActions = false) : null
            this.log.push(`monster hit player with ${loginfo}`)
        },
        heal() {
            this.player.hp += loginfo = generateBetween(9, 15)
            this.log.push(`player healed ${loginfo}`)
            this.player.hp -= loginfo = generateBetween(7, 12)
            this.player.hp < 0 ? 
                (this.player.hp = 0) || (this.showActions = false) : null
            this.log.push(`monster hit player with ${loginfo}`)
        },
        surrender() {
            this.showActions = false
        },
        newGame() {
            this.player.hp = 100
            this.monster.hp = 100
            this.log = []
            this.showActions = true
        }
    }
})