TweenMax.from(".box", 2, {x: 300, y: 300,opacity: 0.01, scale:0.2});

var all = Draggable.create(".box", {type:"x,y", edgeResistance:0.65, bounds:"#container",
	onDragEnd:function() {
		console.log("drag ended");
    console.log(this.x, this.y);
	}
});
