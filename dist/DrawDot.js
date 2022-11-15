class DrawDots{constructor(t,s=!0){var o,i;this.margin=.05,this.dotCount=t,this.dots=[],this.startLeft=s,this.randomPoolXstartLeft=-DOMINANTSIDE*this.margin*5,this.randomPoolXstopLeft=-DOMINANTSIDE*this.margin,this.randomPoolXstartRight=width+DOMINANTSIDE*this.margin,this.randomPoolXstopRight=width+DOMINANTSIDE*this.margin*5,this.randomPoolYstart=-DOMINANTSIDE*this.margin,this.randomPoolYstop=height+DOMINANTSIDE*this.margin,this.Ystep=(this.randomPoolYstop-this.randomPoolYstart)/this.dotCount;for(var h=0;h<this.dotCount;h++)o=h%2==0||0==h?this.startLeft?getRandomFromInterval(this.randomPoolXstartLeft,this.randomPoolXstopLeft):getRandomFromInterval(this.randomPoolXstartRight,this.randomPoolXstopRight):this.startLeft?getRandomFromInterval(this.randomPoolXstartRight,this.randomPoolXstopRight):getRandomFromInterval(this.randomPoolXstartLeft,this.randomPoolXstopLeft),i=getRandomFromInterval(this.randomPoolYstart+this.Ystep*h,this.randomPoolYstart+this.Ystep*(h+1)),this.dots.push(createVector(o,i,0))}addBrushsystem(t,s){for(var o,i,h,e,r,n,d=0;d<this.dots.length-1;d++)o=this.dots[d].x/width*DOMINANTSIDE,i=this.dots[d].y/height*DOMINANTSIDE,h=this.dots[d].z,e=this.dots[d+1].x/width*DOMINANTSIDE,r=this.dots[d+1].y/height*DOMINANTSIDE,n=this.dots[d+1].z,t.add(new Brush(createVector(o,i,h),createVector(e,r,n),color(PALETTE.line),s))}show(){for(var t,s,o,i,h,e,r=0;r<this.dots.length-1;r++)t=this.dots[r].x/width*DOMINANTSIDE,s=this.dots[r].y/height*DOMINANTSIDE,o=this.dots[r].z,i=this.dots[r+1].x/width*DOMINANTSIDE,h=this.dots[r+1].y/height*DOMINANTSIDE,e=this.dots[r+1].z,push(),translate(-width/2,-height/2),this.startLeft?stroke("blue"):stroke("red"),line(t,s,o,i,h,e),this.startLeft?fill("blue"):fill("red"),noStroke(),ellipse(t,s,10),pop()}}class drawDotsSystem{constructor(){this.dotsA1=new DrawDots(3),this.dotsA2=new DrawDots(3,!1),this.intersectionPointsA=this.getIntersections(this.dotsA1,this.dotsA2),this.polygonsA=this.createPolygons(this.dotsA1,this.dotsA2,this.intersectionPointsA),this.dotsB1=new DrawDots(4),this.dotsB2=new DrawDots(4,!1),this.intersectionPointsB=this.getIntersections(this.dotsB1,this.dotsB2),this.polygonsB=this.createPolygons(this.dotsB1,this.dotsB2,this.intersectionPointsB),this.dotsC1=new DrawDots(5),this.dotsC2=new DrawDots(5,!1),this.intersectionPointsC=this.getIntersections(this.dotsC1,this.dotsC2),this.polygonsC=this.createPolygons(this.dotsC1,this.dotsC2,this.intersectionPointsC)}getIntersections(t,s){for(var o,i,h,e,r=[],n=t.dotCount-1,d=0;d<n;d++)o=t.dots[d],i=t.dots[d+1],h=s.dots[d],e=s.dots[d+1],r.push(getIntersectionPoint(o,i,h,e));return r}createPolygons(t,s,o){for(var i=t.dotCount-1,h=[],e=1;e<i;e++)h.push([o[e-1],t.dots[e],o[e],s.dots[e]]);return h}showIntersectionPoint(t){for(var s=0;s<t.length;s++)push(),translate(-width/2,-height/2),translate(t[s].x,t[s].y),fill("green"),noStroke(),ellipse(0,0,10),pop()}showPolygons(t){for(var s=0;s<t.length;s++)push(),translate(-width/2,-height/2),noFill(),beginShape(),vertex(t[s][0].x,t[s][0].y),vertex(t[s][1].x,t[s][1].y),vertex(t[s][2].x,t[s][2].y),vertex(t[s][3].x,t[s][3].y),endShape(CLOSE),pop()}show(){this.dotsA1.show(),this.dotsA2.show(),this.dotsB1.show(),this.dotsB2.show(),this.dotsC1.show(),this.dotsC2.show(),this.showIntersectionPoint(this.intersectionPointsA),this.showIntersectionPoint(this.intersectionPointsB),this.showIntersectionPoint(this.intersectionPointsC),this.showPolygons(this.polygonsA),this.showPolygons(this.polygonsB),this.showPolygons(this.polygonsC)}fireBrush(t){"cLevel"==t&&(this.dotsC1.addBrushsystem(brushSystem,"cLevel"),this.dotsC2.addBrushsystem(brushSystem,"cLevel")),"bLevel"==t&&(this.dotsB1.addBrushsystem(brushSystem,"bLevel"),this.dotsB2.addBrushsystem(brushSystem,"bLevel")),"aLevel"==t&&(this.dotsA1.addBrushsystem(brushSystem,"aLevel"),this.dotsA2.addBrushsystem(brushSystem,"aLevel"))}}