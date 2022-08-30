const soldier = {
    name: 'Jim',
    health: 10,
    weapon: {
        model: 'm4a1',
        bullets: 30,
    },
    ammo: 1,

    fire: function () {
        if (this.weapon.bullets <= 0 ) {
            console.log('Обойма пуста. Перезарядитесь.')
            return
        } 
        console.log('бах-бах')
        this.weapon.bullets--
    },
    reload: function () {
        if (this.ammo <= 0) {
            console.log('Нет боеприпасов')
            return
        } console.log('Перезарядка...')
        this.ammo-- 
        this.weapon.bullets = 30

    },

    getHurt: function () {
        this.health > 0 ? (this.health--) : (console.log(this.name + ' is dead'))
    },
    getStatus: function () {
        console.log(`Здоровье: ${this.health}`)
        console.log(`Патроны: ${this.ammo}/${this.weapon.bullets}`)
    }
}
