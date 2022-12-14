const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height);

const gravity = 0.4

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
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        //console.log(this.position.y + this.height + this.velocity.y)
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

const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

function animate() {
    window.requestAnimationFrame(animate)
    c.fillStyle = "black"
    c.fillRect(0,0, canvas.width, canvas.height)
    player.update()
    enemy.update()
    player.velocity.x = 0
    if (keys.a.pressed) {
        player.velocity.x = -8
    }
    else if (keys.d.pressed) {
        player.velocity.x = 8
    }
}

animate()
//move right
window.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "d":
            keys.d.pressed = true
            break
        case "a":
            keys.a.pressed = true
            break
        case "w":
            player.velocity.y = -10
            break
    }
    console.log(event.key)
})

window.addEventListener("keyup", (event) => {
    switch (event.key) {
        case "d":
            keys.d.pressed = false
            break
        case "a":
            keys.a.pressed = false
            break
        //case "w":
            //keys.w.pressed = false
    }
    console.log(event.key)
})

