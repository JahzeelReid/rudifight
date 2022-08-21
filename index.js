const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.2

class Sprite {
    constructor({position, velocity}){
        this.velocity = velocity
        this.position = position
        this.height = 100
    }

    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }

    update() {
        
        this.draw()
        
        this.position.y += this.velocity.y
        console.log(this.position.y + this.height + this.velocity.y)
        if (this.position.y + this.height + this.velocity.y >= 576){
            this.velocity.y = 0
        }
        else this.velocity.y += gravity
    }
}

const player = new Sprite({
    position: {
        x: 0,
        y: 0
    }, 
    velocity: {
        x: 0,
        y: 10
    }
   
})
const enemy = new Sprite({
    position: {
        x: 300,
        y: 0
    }, 
    velocity: {
        x: 0,
        y: 5
    }
})

player.draw()
enemy.draw()

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0,0, canvas.width, canvas.height)
    player.update()
    enemy.update()
}

animate()