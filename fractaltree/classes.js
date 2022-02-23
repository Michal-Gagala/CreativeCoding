// endBrown = 64, 37, 20
// startBrown = 191, 89, 25;
// endBrown HSV = 23°, 88%, 30%
// startBrown HSV  =23°, 88%, 80%
// leaf hsv = 119°, 73%, 54%

class Branch {
    constructor(x, y, endX, endY, weight, age) {
        this.x = x;
        this.y = y;

        if (weight < 1) {
            this.weight = 1;
        } else {
            this.weight = weight;
        }

        this.endX = endX;
        this.endY = endY;
        this.age = age;
    }

    draw() {
        // stroke(125, 63, 25);
        var age = min(this.age, 5);
        stroke(23, 88, 80 - (age * 10));
        strokeWeight(this.weight);
        // console.log(endX);
        // console.log(endY);
        line(this.x, this.y, this.endX, this.endY);
    }
}

class Leaf {
    constructor(x, y, length, angle, weight) {
        this.x = x;
        this.y = y;
        this.angle = angle;

        if (length < 1) {
            this.length = 1;
        } else {
            this.length = length;
        }

        if (weight < 1) {
            this.weight = 1;
        } else {
            this.weight = weight;
        }

        this.endX = this.x + (this.length * cos(this.angle));
        this.endY = this.y + (this.length * sin(this.angle));
    }

    draw() {
        // stroke(25, 125, 30);
        stroke(119, 73, 54);
        strokeWeight(this.weight);
        
        // console.log(endX);
        // console.log(endY);
        line(this.x, this.y, this.endX, this.endY);
    }

    grow() {
        
        // Default version
        var ret = [new Branch(this.x, this.y, this.endX, this.endY, this.weight, 0)];
        ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle, this.weight/ 1.5)); 
        
        // ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle + 30, this.weight / 1.5));
        // ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle + 60, this.weight / 1.5));
        // ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle + 90, this.weight / 1.5));
        ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle + 45, this.weight / 1.5));

        // ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle - 30, this.weight / 1.5));
        // ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle - 60, this.weight / 1.5));
        // ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle - 90, this.weight / 1.5));
        ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle - 45, this.weight / 1.5));
    
        return ret;

        // angle correction
        // var ret = [new Branch(this.x, this.y, this.endX, this.endY, this.weight, 0)];
        // ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle, this.weight/ 1.5)); 
        
        // if (this.angle + 30 <= 180 && this.angle + 30 >= 0) {
        //     ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle + 30, this.weight / 1.5));
        //     if (this.angle + 60 <= 180 && this.angle + 60 >= 0) {
        //         ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle + 60, this.weight / 1.5));
        //         if (this.angle + 90 <= 180 && this.angle + 90 >= 0) {
        //             ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle + 90, this.weight / 1.5));
        //         }
        //     }
        // }
        
        // if (this.angle - 30 <= 180 && this.angle - 30 >= 0) {
        //     ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle - 30, this.weight / 1.5));
        //     if (this.angle - 60 <= 180 && this.angle - 60 >= 0) {
        //         ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle - 60, this.weight / 1.5));
        //         if (this.angle - 90 <= 180 && this.angle - 90 >= 0) {
        //             ret.push(new Leaf(this.endX, this.endY, this.length / 1.5, this.angle - 90, this.weight / 1.5));
        //         }
        //     }
        // }
    
        // return ret;
    }
}
