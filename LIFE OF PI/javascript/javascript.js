$(function (){
	document.body.style.height = document.documentElement.clientHeight + 'px';
	var iH = $(window).innerHeight();
	var iW = $(window).innerWidth();
	var wH = iW/1024*885-iH;
	var wH2 = iW/1024*1510-iH;
	var wH3 = iW/1024*1194-iH;
	var wH4 = iW/1024*1294-iH;
	var wW = 0.7*iH/462*1942-iW;
	console.log($('#waves').find('img'));
	var num = 0;
	var step = iH/20;
	var iO = 1/5;
	var nLbox = 0;
	
	
	//加载
	var numImg = 0;
	var arrImg = [];
	var str = '';
	for (var i = 0;i<9;i++) {
		str += '<div class="move'+(i+1)+'"></div>'
	}
	$('#loader').find('.animate').html(str);
	var divs = $('#loader').find('.animate').find('div');
	
	for (var attr in dataImg) {
		for (var i = 0;i<dataImg[attr].length;i++) {
			arrImg.push(dataImg[attr][i]);	
		}
	}
	console.log($('#loader').find('.animate').find('div').length);
	for (var i = 0;i<arrImg.length;i++) {
		var oImg = new Image();
		oImg.src = arrImg[i];
		oImg.onload = function (){
			numImg++;
			var rate = Math.floor((numImg/arrImg.length)*100);
			$('#loader').find('strong')[0].innerHTML = rate + '%';
			//console.log(rate);
			if(numImg == arrImg.length){
				$('#wrap').css({transform: 'translate3d(0,0,0)'});
				$('#loader').css({opacity:0});
				setTimeout(function(){
					$('#loader').css({display:'none'});
					$('#loader').find('.animate').html('');
				},1000)
			}
		}
		oImg.onerror = function(){
			numImg++;
		}
	}
	
	
	$('#loading').css({height: iH});
	$('#introduce').css({
		height: iH,
		transform: 'translate3d(0,'+(iH/2)+'px,0)',
		transition: '.5s'
	})
	$('#waves').css({
		height: iH,
		transform: 'translate3d(0,'+(iH/2)+'px,0)',
		transition: '.5s'
	})
	
	$('#sperator').find('.sR').find('.img').html(creatImg(dataImg.sperator));
	$('#sperator').css({
		transform: 'translate3d(0,'+(iH)+'px,0)',
		height: 0.75*iH,
		transition: '.5s'
	})
	$('#sperator').find('img').css({
		width:iW/2
	})
	$('#drift').css({
		transform: 'translate3d(0,'+(iH/2)+'px,0)',
		height:3.5*iH,
		transition: '.5s'
	});
	$('#drift').find('.img1').html(creatImg(dataImg.swim));
	$('#drift').find('.swim').css({height: iH});
	$('#drift').find('.swim').find('.img1').find('img').eq(0).css({display:'block'}).siblings('img').css({display:'none'});
	$('#drift').find('li').css({
		height:0.44*iH
	});
	$('#drift').find('.videoBg').css({
		left: ($('#drift').find('li').eq(0).width()-31)/2,
		top: ($('#drift').find('li').eq(0).height()-31)/2,
		transition: '.5s'
	});
	$('#storm').find('.mask1').find('img').css({
		height:iH,
		transition: '.5s'
	});
	$('#storm').find('.mAfter2').find('img').css({
		width:iW
	});
	$('#tiger').css({
		transform: 'translate3d(0,'+(iH)+'px,0)',
		transition: '.5s'
	});
	$('#tiger').find('.compare').css({
		left:(iW-$('#tiger').find('.compare').width())/2,
		height:iH*0.68
	});
	$('#tiger').find('.virtual').css({
		height:iH*0.68
	});
	$('#tiger').find('.tiger').find('img').css({
		width:iW*0.38
	});
	$('#tiger').find('.symbol').find('img').css({
		width:iW*0.31
	});
	$('#tiger').find('.compare').find('.circle1')[0].innerHTML += creatImg(dataImg.compare);
	$('#tiger').find('.compare').find('.circle2')[0].innerHTML += creatImg(dataImg.compare);
	$('#tiger').find('.king').find('.content1').css({top:0.6*iH});
	$('#tiger').find('.king').find('.content2').css({top:0.75*iH});
	$('#tiger').find('.king').find('.content3').css({top:1.03*iH});
	$('#tiger').find('.circle1').find('img').eq(0).css({display:'block'}).siblings('img').css({display:'none'});
	$('#tiger').find('.circle2').find('img').eq(0).css({display:'block'}).siblings('img').css({display:'none'});
	$('#tiger').find('.virtual').html(creatImg(dataImg.virtual));
	$('#tiger').find('.virtual').find('img').eq(0).css({display:'block'}).siblings('img').css({display:'none'});
	$('#island').find('.floor3').find('.left').find('img').css({width:iW/2});
	$('#island').find('.floor3').find('.right').find('img').css({width:iW/2});
	$('#island').find('.floor3').find('.top').find('.lBox')[0].innerHTML += creatDiv(dataImg.lBox1);
	$('#island').find('.floor3').find('.bottom').find('.lBox')[0].innerHTML += creatDiv(dataImg.lBox2);
	$('#island').find('.floor3').find('.lBox').find('img').css({width:0.7*iW});
	function creatImg(arr){
		var html = '';
		for (var i = 0;i<arr.length;i++) {
			html += '<img src="'+arr[i]+'">';
		}
		return html;
	}
	
	function creatDiv(arr){
		var html = '';
		for (var i = 1;i<arr.length;i++) {
			html += '<div><img class="pics" src="'+arr[i]+'"></div>';
		}
		return html;
	}
	var divsTop = $('#island').find('.floor3').find('.top').find('.lBox').find('div');
	var divsBottom = 	$('#island').find('.floor3').find('.bottom').find('.lBox').find('div');
	
	$('#whale').find('.spin').html(creatImg(dataImg.whale));
	$('#whale').find('.spin').find('img').eq(0).css({display:'block'}).siblings('img').css({display:'none'});
	$('#buy').find('.download').css({left:(iW-890)/2});
	$('#buy').find('.top').css({left:(iW-800)/2});
	$('#buy').find('li').css({
		width:0.15*iW,
		margin:0.024*iW
	});
	
	wheel(document,function (){
		//向上
		num--;
		if (num <= 0){
			num = 0;
			$('#loading').css('transform: translate3d(0,0,0)');
		}
		if(num>=0 && num <= 10){
			$('#introduce').css({transform: 'translate3d(0,'+(iH/2)+'px,0)'});
		}
		console.log(num);
		if(num>=10 && num <= 20) {
			$('#introduce').css({transform: 'translate3d(0,'+(iH/2-(num-10)*step)+'px,0)'});
		}
		if(num>=0&&num<=20){
			$('#loading').css({transform: 'translate3d(0,'+(-num*step)+'px,0)'});
		}
		if(10<=num && num<=25){
			$('#introduce').find('.content1').css({
				opacity:1,
				transform: 'translate3d(0,100px,0)'
			});
			$('#introduce').find('.content2').css({
				opacity:0,
				transform: 'translate3d(0,200px,0)'
			});
		}
		if(25<num && num<=30){
			$('#introduce').find('.content1').css({
				opacity:1-iO*(num-25),
				transform: 'translate3d(0,'+(100-20*(num-25))+'px,0)'
			});
			$('#introduce').find('.content2').css({
				opacity:0,
				transform: 'translate3d(0,200px,0)'
			});
		}
		
		if(30<num&&num<=35){
			$('#introduce').find('.content2').css({
				opacity:1-iO*(35-num),
				transform: 'translate3d(0,'+(100+20*(35-num))+'px,0)'
			});
		}
		if(35<num){
			$('#introduce').find('.content2').css({
				opacity:1,
				transform: 'translate3d(0,100px,0)'
			});
		}
		if(40<num&&num<= 50){
			$('#waves').css({transform: 'translate3d(0,'+(iH/2)+'px,0)'});
		}
		if(40<num&&num< 60){
			$('#introduce').css({transform: 'translate3d(0,'+((40-num)*step)+'px,0)'});
			$('#waves').find('.content').css({opacity:0});
		}
		if(50<num&& num< 60){
			$('#waves').css({transform: 'translate3d(0,'+((60-num)*step)+'px,0)'});
			$('#waves').find('.content').css({opacity:1-iO/2*(60-num)});
		}
		if (55<num&&num<60){
			$('#waves').find('.mask3').css({height:(60-num)*4*step});
		}
		if(55<num&&num<=65){
			$('#waves').find('img').css({transform: 'translate3d(0,'+((55-num)*wH/10)+'px,0)'});
		}
		if(60<num && num<65){
			$('#introduce').css({transform: 'translate3d(0,'+(-iH)+'px,0)'});
			$('#waves').find('.mask2').css({height:(65-num)*4*step});
			$('#sperator').find('.img').find('img').eq(0).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(65<=num && num<=100){
			$('#sperator').css({transform: 'translate3d(0,'+(100-(num-65)*5)+'%,0)'});
		}
		if(65<num && num<=85){
			$('#waves').css({transform: 'translate3d(0,'+(-step*(num-65))+'px,0)'});
			$('#sperator').find('.img2').css({width:(num-65)*iW/40});
			$('#sperator').find('.img').find('img').eq(num-65).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(80<num&&num<=90){
			$('#drift').css({transform: 'translate3d(0,'+(iH/2-(num-80)*step)+'px,0)'});
			$('#drift').find('.img1').find('img').eq(0).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(90<num&&num<=165){
			$('#drift').find('.img1').find('img').eq(num-90).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num==165){
			$('#drift').find('.sideRight').animate({right:-430},500);
		}
		if(165<=num&&num<=175){
			$('#drift').find('.img2').css({height:693/10*(num-165)});
		}
		if(175<=num&&num<=200){
			$('#drift').find('.img2').css({height:693});
		}
		if(num==200){
			$('#drift').find('.sideRight').find('.box')[0].style.transform = 'rotateY(0deg)';
		}
		if(175<num&&num<=245){
			$('#drift').css({transform: 'translate3d(0,'+(-(num-175)*step)+'px,0)'});
			$('#drift').find('.sideRight').css({transform: 'translate3d(0,'+((num-175)*step)+'px,0)'});
		}
		if(225<=num&&num<=245){
			$('#drift').find('.sideRight').css({transform: 'translate3d(0,'+(45*step)+'px,0)'});
			$('#storm').css({transform: 'translate3d(0,'+((245-num)*step)+'px,0)'});
		}
		if(num==246){
			$('#storm').find('.text1').animate({opacity:0},500);
		}
		if(num<=245){
			$('#storm').find('.mAfter1').css({height: 0});
		}
		if(245<num&&num<=255){
			$('#storm').find('.mAfter1').css({height: (num-245)*10+'%'});
		}
		if(255<=num&&num<=265){
			$('#storm').find('.mask2').css({transform: 'translate3d('+(10*(265-num))+'%,0,0)'});
		}
		if(265<=num&&num<=275){
			$('#storm').find('.mAfter2').css({width:10*(num-265)+'%'});
		}
		if(275<=num&&num<=285){
			$('#storm').find('.mask3').css({transform: 'translate3d('+(10*(285-num))+'%,0,0)'});
		}
		if(290<=num&&num<=300){
			$('#storm').find('.mask3').css({transform: 'translate3d(0,0,0)'});
			$('#storm').css({transform: 'translate3d(0,'+(-(num-290)*2*step)+'px,0)'});
			$('#tiger').css({transform: 'translate3d(0,'+(iH-(num-290)*2*step)+'px,0)'});
			$('#tiger').find('.mask').find('img').css({transform: 'translate3d(0,'+((290-num)*wH2/10)+'px,0)'});
			$('#tiger').find('.mask3').css({height:(100-(num-290)*20)+'%'});
			
		}
		if(290<=num&&num<=295){
			$('#tiger').find('.content').css({opacity:0});
		}
		if(num>=295&&num<=300){
			$('#tiger').find('.mask2').css({height:(100-(num-295)*20)+'%'});
			$('#tiger').find('.mask3').css({height:0});
			$('#tiger').find('.content').css({opacity:iO*(num-295)});
		}
		if(num>=300&&num<=310){
			$('#tiger').find('.content').css({opacity:1-iO*(num-300)});
			$('#tiger').find('.mask').find('img').css({transform: 'translate3d(0,'+(-wH2)+'px,0)'});
			$('#tiger').find('.mask2').css({height:0});
			$('#tiger').find('.mask').css({transform: 'translate3d(0,'+((300-num)*step*2)+'px,0)'});
			$('#tiger').css({transform: 'translate3d(0,0,0)'});
		}
		if(num>=310&&num<=315){
			$('#tiger').find('.mask').css({transform: 'translate3d(0,'+(-iH)+'px,0)'});
			$('#tiger').find('.content1').css({opacity:iO*(num-310)});
		}
		if(num==315){
			$('#tiger').find('.tiger').animate({
				left:-800
			},500)
			$('#tiger').find('.symbol').animate({
				right:-800
			},500)
		}
		if(num==320){
			$('#tiger').find('.content1').animate({opacity:0},300);
		}
		if(num>=320&&num<=327){
			$('#tiger').find('.content2').css({opacity:iO*(num-320)});
			$('#tiger').find('.king').css({transform: 'translate3d(0,'+((320-num)*step*2)+'px,0)'});
			$('#tiger').find('.king').find('.compare').css({transform: 'translate3d(0,0,0)'});
		}
		if(num>327&&num<=349){
			$('#tiger').find('.king').css({transform: 'translate3d(0,'+(-7*step*2)+'px,0)'});
			$('#tiger').find('.circle1').find('img').eq(num-327).css({display:'block'}).siblings('img').css({display:'none'});
			$('#tiger').find('.circle2').find('img').eq(num-327).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num==348){
			$('#tiger').find('.compare').find('.filter').css({zIndex:0});
			$('#tiger').find('.virtual').animate({bottom:-456},500);
		}
		if(num>=349&&num<=352){
			$('#tiger').find('.king').css({transform: 'translate3d(0,'+((342-num)*step*2)+'px,0)'});
		}
		if(num==350){
			$('#tiger').find('.compare').animate({opacity:1},500);
		}
		if(num==351){
			$('#tiger').find('.content3').animate({opacity:0},500);
		}
		if(num>=352&&num<=382){
			$('#tiger').find('.king').css({transform: 'translate3d(0,'+((-10)*step*2)+'px,0)'});
			$('#tiger').find('.virtual').find('img').eq(num-352).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num>=390&&num<=400){
			$('#tiger').find('.virtual').find('img').eq(30).css({display:'block'}).siblings('img').css({display:'none'});
			$('#tiger').find('.king').css({transform: 'translate3d(0,'+((-10)*step*2)+'px,0)'});
			$('#tiger').css({transform: 'translate3d(0,'+((390-num)*step*2)+'px,0)'});
		}
		if(num>=400&&num<=405){
			$('#tiger').css({transform: 'translate3d(0,'+(-iH)+'px,0)'});
			$('#island').find('.floor1').find('img').css({transform: 'translate3d(0,'+((400-num)*wH3/10)+'px,0)'});
			$('#island').find('.mask3').css({height:(100-(num-400)*20)+'%'});
		}
		if(num>=405&&num<=410){
			$('#island').find('.mask3').css({height:0});
			$('#island').find('.mask2').css({height:(100-(num-405)*20)+'%'});
			$('#island').find('.floor1').find('.content').css({opacity:(num-405)*iO});
		}
		if(num>=410&&num<=415){
			$('#island').find('.mask2').css({height:0});
			$('#island').find('.floor1').find('img').css({transform: 'translate3d(0,'+(-wH3)+'px,0)'});
			$('#island').find('.floor1').find('.content').css({opacity:1});
		}
		if(num>=415&&num<=420){
			$('#island').find('.floor1').css({transform: 'translate3d(0,'+(-(num-415)*20)+'%,0)'});
		}
		if(num>=420&&num<=425){
			$('#island').find('.floor1').css({transform: 'translate3d(0,-100%,0)'});
			$('#island').find('.floor2').css({transform: 'translate3d(0,'+(-(num-420)*20)+'%,0)'});
		}
		if(num>=425&&num<=430){
			$('#island').find('.floor3').find('.content').css({opacity:(num-425)*iO});
		}
		if(num>=430&&num<=435){
			$('#island').find('.floor3').find('.content').css({opacity:1});
			$('#island').find('.floor3').find('.left').css({height:(num-430)+'0%'});
			$('#island').find('.floor3').find('.right').css({height:(num-430)+'0%'});
			$('#island').find('.floor3').find('.box2').css({width: (num-435)+'0%'});
		}
		if(num>=435&&num<=445){
			$('#island').find('.floor3').find('.box2').css({width: (num-435)+'0%'});
			$('#island').find('.floor3').find('.box3').css({width: (num-440)+'0%'});
		}
		if(num>=445&&num<=450){
			$('#island').find('.floor3').find('.box3').css({width: (num-440)+'0%'});
		}
		if(num>=460&&num<=465){
			$('#island').find('.floor3').find('.top').css({height: (num-460)+'0%'});
			$('#island').find('.floor3').find('.bottom').css({height: (num-460)+'0%'});
		}
		if(num>=470&&num<=480){
			divsTop.eq(0).css({width:(num-470)+'0%'});
		}
		if(num>=474&&num<=484){
			divsTop.eq(1).css({width:(num-474)+'0%'});
		}
		if(num>=478&&num<=488){
			divsTop.eq(2).css({width:(num-478)+'0%'});
		}
		if(num>=482&&num<=492){
			divsTop.eq(3).css({width:(num-482)+'0%'});
		}
		if(num>=486&&num<=496){
			divsTop.eq(4).css({width:(num-486)+'0%'});
		}
		if(num>=490&&num<=4500){
			divsTop.eq(5).css({width:(num-490)+'0%'});
		}
		if(num>=494&&num<=504){
			divsTop.eq(6).css({width:(num-494)+'0%'});
		}
		if(num>=498&&num<=508){
			divsTop.eq(7).css({width:(num-498)+'0%'});
		}
		
		if(num>=510&&num<=520){
			divsBottom.eq(0).css({width:(num-510)+'0%'});
		}
		if(num>=514&&num<=524){
			divsBottom.eq(1).css({width:(num-514)+'0%'});
		}
		if(num>=518&&num<=528){
			divsBottom.eq(2).css({width:(num-518)+'0%'});
		}
		if(num>=522&&num<=532){
			divsBottom.eq(3).css({width:(num-522)+'0%'});
		}
		if(num>=526&&num<=536){
			divsBottom.eq(4).css({width:(num-526)+'0%'});
		}
		if(num>=530&&num<=540){
			divsBottom.eq(5).css({width:(num-530)+'0%'});
		}if(num>=534&&num<=544){
			divsBottom.eq(6).css({width:(num-534)+'0%'});
		}
		if(num>=538&&num<=548){
			divsBottom.eq(7).css({width:(num-538)+'0%'});
		}
		if(num>=540&&num<=550){
			$('#island').find('.video').css({transform: 'translate3d('+(10-(num-540))+'0%,0,0)'});
		}
		if(num>=555&&num<=565){
			$('#island').css({transform: 'translate3d(0,'+(-(num-555))+'0%,0)'});
		}
		if(num>=565&&num<=570){
			$('#island').css({transform: 'translate3d(0,-100%,0)'});
			$('#whale').find('.floor1').find('img').css({transform: 'translate3d(0,'+((565-num)*wH4/10)+'px,0)'});
			$('#whale').find('.floor1').find('.mask3').css({height:(100-(num-565)*20)+'%'});
		}
		if(num>=570&&num<=575){
			$('#whale').find('.floor1').find('.mask3').css({height:0});
			$('#whale').find('.floor1').find('.mask2').css({height:(100-(num-570)*20)+'%'});
			$('#whale').find('.floor1').find('.content').css({opacity:(num-570)*iO});
		}
		if(num>=575&&num<=580){
			$('#whale').find('.floor1').find('.mask2').css({height:0});
			$('#whale').find('.floor1').find('img').css({transform: 'translate3d(0,'+(-wH4)+'px,0)'});
			$('#whale').find('.floor1').find('.content').css({opacity:1});
		}
		if(num>=580&&num<=585){
			$('#whale').find('.floor1').css({transform: 'translate3d(0,'+(-(num-580)*2)+'0%,0)'});
		}
		if(num>=585&&num<=590){
			$('#whale').find('.floor1').css({transform: 'translate3d(0,-100%,0)'});
		}
		if(num>=590&&num<=600){
			$('#whale').find('.floor2').find('.img').css({transform: 'translate3d('+(-(num-590)*wW/10)+'px,0,0)'});
		}
		if(num>=605&&num<=615){
			$('#whale').find('.floor2').css({transform: 'translate3d(0,'+(-(num-605))+'0%,0)'});
			$('#whale').find('.floor2').find('.img').css({transform: 'translate3d('+(-wW)+'px,0,0)'});
		}
		if(num>=610&&num<=615){
			$('#whale').find('.floor3').css({transform: 'translate3d(0,'+(5-(num-610))+'0%,0)'});
		}
		if(num>=615&&num<=620){
			$('#whale').find('.floor2').css({transform: 'translate3d(0,-100%,0)'});
			$('#whale').find('.floor3').css({transform: 'translate3d(0,0,0)'});
		}
		if(num>=620&&num<=702){
			$('#whale').find('.spin').find('img').eq(num-620).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num>=702&&num<=705){
			$('#whale').find('.spin').find('img').eq(82).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num>=705&&num<=715){
			$('#whale').find('.video').css({transform: 'translate3d('+(10-(num-705))+'0%,0,0)'});
		}
		if(num>=715&&num<=720){
			$('#whale').find('.video').css({transform: 'translate3d(0,0,0)'});
		}
		if(num>=720&&num<=725){
			$('#whale').css({transform: 'translate3d(0,'+(-(num-720))+'0%,0)'});
		}
		if(num>=725&&num<=730){
			$('#end').css({transform: 'translate3d(0,'+(5-(num-725))+'0%,0)'});
			$('#whale').css({transform: 'translate3d(0,'+(-(num-720))+'0%,0)'});
			$('#end').find('img').css({transform: 'scale(1)'});
		}
		if(num>=730&&num<=735){
			$('#whale').css({transform: 'translate3d(0,-100%,0)'});
			$('#end').css({transform: 'translate3d(0,0,0)'});
			$('#end').find('img').css({transform: 'scale('+(1+(num-730)/20)+')'});
		}
		if(num>=735&&num<=748){
			$('#buy').css({transform: 'translate3d(0,'+(17-(num-735))+'0%,0)'});
		}
		
		
		
		
		
	},function (){
		//向下
		num++;
		console.log(num);
		if(num>=0&&num<=20){
			$('#loading').css({transform: 'translate3d(0,'+(-num*step)+'px,0)'});
		}
		if(num >= 10) {
			$('#introduce').css({transform: 'translate3d(0,'+(iH/2-(num-10)*step)+'px,0)'});
		}
		if(num>=20){
			$('#introduce').css({transform: 'translate3d(0,0,0)'});
			$('#loading').css({transform: 'translate3d(0,'+(-iH)+'px,0)'});
		}
		//drift
		if(num >= 25){
			$('#introduce').find('.content1').css({
				opacity:1-iO*(num-25),
				transform: 'translate3d(0,'+(100-20*(num-25))+'px,0)'
			});
		}
		if(num >= 30){
			$('#introduce').find('.content1').css({
				opacity:0,
				transform: 'translate3d(0,0,0)'
			});
			$('#introduce').find('.content2').css({
				opacity:iO*(num-30),
				transform: 'translate3d(0,'+(200-20*(num-30))+'px,0)'
			});
		}
		if(num>=35){
			$('#introduce').find('.content2').css({
				opacity:1,
				transform: 'translate3d(0,100px,0)'
			});
		}
		if(num >= 40){
			$('#introduce').css({transform: 'translate3d(0,'+((40-num)*step)+'px,0)'});
		}
		//waves
		if(num >= 50){
			$('#waves').css({transform: 'translate3d(0,'+((60-num)*step)+'px,0)'});
			$('#waves').find('.content').css({opacity:iO/2*(num-50)});
		}
		if(num>=55){
			console.log($('#waves').find('.mask3').css('height'));
			$('#waves').find('.mask3').css({height:(60-num)*4*step});
			$('#waves').find('img').css({transform: 'translate3d(0,'+((55-num)*wH/10)+'px,0)'});
		}
		if(num >= 60){
			$('#introduce').css({transform: 'translate3d(0,'+(-iH)+'px,0)'});
			$('#waves').css({transform: 'translate3d(0,0,0)'});
			$('#waves').find('.mask2').css({height:(65-num)*4*step});
			$('#waves').find('.content').css({opacity:1});
		}
		//sperator
		if(num>=65){
			$('#waves').css({transform: 'translate3d(0,'+(-step*(num-65))+'px,0)'});
			$('#waves').find('img').css({transform: 'translate3d(0,'+(-wH)+'px,0)'});
			$('#sperator').css({transform: 'translate3d(0,'+(100-(num-65)*5)+'%,0)'});
			$('#sperator').find('.img2').css({width:(num-65)*iW/40});
			$('#sperator').find('.img').find('img').eq(num-65).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num>=80){
			$('#drift').css({transform: 'translate3d(0,'+(iH/2-(num-80)*step)+'px,0)'});
		}
		if(num>=85){
			$('#waves').css({transform: 'translate3d(0,'+(-iH)+'px,0)'});
			$('#sperator').find('.img2').css({width:iW/2});
			$('#sperator').find('.img').find('img').eq(20).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num>=100){
			$('#sperator').css({transform: 'translate3d(0,-100%,0)'});
		}
		if(num>=90){
			$('#drift').css({transform: 'translate3d(0,0,0)'});
			$('#drift').find('.img1').find('img').eq(num-90).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num==165){
			$('#drift').find('.sideRight').animate({right:0},500);
			var na = 0;
			clearInterval($('#drift')[0].timer);
			$('#drift')[0].timer = setInterval(function (){
					na+=2;
					if(na >= 120){
						na = 120;
						clearInterval($('#drift')[0].timer);
					}
					$('#drift').find('.front').find('.after').find('.number').html(na);
				},40)
		}
		if(num>160){
			$('#drift').find('.img1').find('img').eq(70).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num>165){
			$('#drift').find('.img2').css({height:693/10*(num-165)});
		}
		if(num>=175){
			$('#drift').find('.img2').css({height:693});
			$('#drift').css({transform: 'translate3d(0,'+(-(num-175)*step)+'px,0)'});
			$('#drift').find('.sideRight').css({transform: 'translate3d(0,'+((num-175)*step)+'px,0)'});
		}
		if(num==200){
			$('#drift').find('.sideRight').find('.box')[0].style.transform = 'rotateY(90deg)';
			var nb = 0;
			clearInterval($('#drift')[0].timer1);
			$('#drift')[0].timer1 = setInterval(function (){
					nb+=15393;
					if(nb >= 1860000){
						nb = 1860000
						clearInterval($('#drift')[0].timer1);
					}
					$('#drift').find('.sideL').find('.number').html(nb);
				},30);
			var nc = 0;
			clearInterval($('#drift')[0].timer2);
			$('#drift')[0].timer2 = setInterval(function (){
					nc+=1;
					if(nc >= 4){
						nc = 4
						clearInterval($('#drift')[0].timer2);
					}
					$('#drift').find('.sideL').find('.top').find('img').attr('src','images/drift/side2/pool-'+nc+'.png');
				},500);
		}
		if(num>=220){
			$('#drift').find('.sideRight').css({transform: 'translate3d(0,'+(45*step)+'px,0)'});
		}
		if(num>=245){
			$('#drift').css({transform: 'translate3d(0,'+(-70*step)+'px,0)'});
		}
		
		
		
		//strom
		if(num>=225){
			$('#storm').css({transform: 'translate3d(0,'+(iH-(num-225)*step)+'px,0)'});
		}
		if(num>=245){
			$('#storm').css({transform: 'translate3d(0,0,0)'});
			$('#storm').find('.mAfter1').css({height: (num-245)*10+'%'});
		}
		if(num == 245){
			$('#storm').find('.text1').animate({opacity:1},500);
		}
		if(num>=255){
			$('#storm').css({transform: 'translate3d(0,0,0)'});
			$('#storm').find('.mAfter1').css({height: '100%'});
			$('#storm').find('.mask2').css({transform: 'translate3d('+(100-10*(num-255))+'%,0,0)'});
		}
		if(num>=265){
			$('#storm').find('.mask2').css({transform: 'translate3d(0,0,0)'});
			$('#storm').find('.mAfter2').css({width:10*(num-265)+'%'});
		}
		if(num>=275){
			$('#storm').find('.mAfter2').css({width:'100%'});
			$('#storm').find('.mask3').css({transform: 'translate3d('+(100-10*(num-275))+'%,0,0)'});
		}
		if(num>=285){
			$('#storm').find('.mask3').css({transform: 'translate3d(0,0,0)'});
		}
		//tiger
		if(num>=290){
			$('#storm').css({transform: 'translate3d(0,'+(-(num-290)*2*step)+'px,0)'});
			$('#tiger').css({transform: 'translate3d(0,'+(iH-(num-290)*2*step)+'px,0)'});
			$('#tiger').find('.mask').find('img').css({transform: 'translate3d(0,'+((290-num)*wH2/10)+'px,0)'});
			$('#tiger').find('.mask3').css({height:(100-(num-290)*20)+'%'});
			
		}
		if(num>=295){
			$('#tiger').find('.mask2').css({height:(100-(num-295)*20)+'%'});
			$('#tiger').find('.mask3').css({height:0});
			$('#tiger').find('.content').css({opacity:iO*(num-295)});
		}
		if(num>=300){
			$('#tiger').find('.content').css({opacity:1-iO*(num-300)});
			$('#tiger').find('.mask').find('img').css({transform: 'translate3d(0,'+(-wH2)+'px,0)'});
			$('#tiger').find('.mask2').css({height:0});
			$('#tiger').find('.mask').css({transform: 'translate3d(0,'+((300-num)*step*2)+'px,0)'});
			$('#tiger').css({transform: 'translate3d(0,0,0)'});
		}
		if(num>=305){
			$('#tiger').find('.content').css({opacity:0});
		}
		if(num>=310){
			$('#tiger').find('.mask').css({transform: 'translate3d(0,'+(-iH)+'px,0)'});
			$('#tiger').find('.content1').css({opacity:iO*(num-305)});
		}
		if(num==315){
			$('#tiger').find('.tiger').animate({
				left: 0.15*iW
			},500)
			$('#tiger').find('.symbol').animate({
				right: 0.18*iW
			},500)
		}
		if(num>=315){
			$('#tiger').find('.content1').css({opacity:1});
		}
		if(num==320){
			$('#tiger').find('.content1').animate({opacity:0},300);
		}
		if(num>320){
			$('#tiger').find('.content1').css({opacity:0});
			$('#tiger').find('.content2').css({opacity:iO*(num-320)});
			$('#tiger').find('.king').css({transform: 'translate3d(0,'+((320-num)*step*2)+'px,0)'});
		}
		if(num>325){
			$('#tiger').find('.content2').css({opacity:1});
		}
		if(num>=327){
			$('#tiger').find('.king').css({transform: 'translate3d(0,'+(-7*step*2)+'px,0)'});
			$('#tiger').find('.circle1').find('img').eq(num-327).css({display:'block'}).siblings('img').css({display:'none'});
			$('#tiger').find('.circle2').find('img').eq(num-327).css({display:'block'}).siblings('img').css({display:'none'});
			$('#tiger').find('.king').find('.compare').css({transform: 'translate3d(0,-30px,0)'});

		}
		if(num==349){
			$('#tiger').find('.compare').find('.filter').css({zIndex:99});
			$('#tiger').find('.virtual').animate({bottom:0},500);
			$('#tiger').find('.content2').animate({bottom:0},500);
		}
		if(num==350){
			$('#tiger').find('.compare').animate({opacity:0},500);
		}
		if(num==351){
			$('#tiger').find('.content3').animate({opacity:1},500);
		}
		if(num>=349){
			$('#tiger').find('.king').css({transform: 'translate3d(0,'+((342-num)*step*2)+'px,0)'});
		}
		if(num>=352){
			$('#tiger').find('.king').css({transform: 'translate3d(0,'+((-10)*step*2)+'px,0)'});
			$('#tiger').find('.virtual').find('img').eq(num-352).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num>=390){
			$('#tiger').find('.virtual').find('img').eq(30).css({display:'block'}).siblings('img').css({display:'none'});
			$('#tiger').find('.king').css({transform: 'translate3d(0,'+((-10)*step*2)+'px,0)'});
			$('#tiger').css({transform: 'translate3d(0,'+((390-num)*step*2)+'px,0)'});
		}
		
		//island
		if(num>=400){
			$('#tiger').css({transform: 'translate3d(0,'+(-iH)+'px,0)'});
			$('#island').find('.floor1').find('img').css({transform: 'translate3d(0,'+((400-num)*wH3/10)+'px,0)'});
			$('#island').find('.mask3').css({height:(100-(num-400)*20)+'%'});
		}
		if(num>=405){
			$('#island').find('.mask3').css({height:0});
			$('#island').find('.mask2').css({height:(100-(num-405)*20)+'%'});
			$('#island').find('.floor1').find('.content').css({opacity:(num-405)*iO});
		}
		if(num>=410){
			$('#island').find('.mask2').css({height:0});
			$('#island').find('.floor1').find('img').css({transform: 'translate3d(0,'+(-wH3)+'px,0)'});
			$('#island').find('.floor1').find('.content').css({opacity:1});
		}
		if(num>=415){
			$('#island').find('.floor1').css({transform: 'translate3d(0,'+(-(num-415)*20)+'%,0)'});
		}
		if(num>=420){
			$('#island').find('.floor1').css({transform: 'translate3d(0,-100%,0)'});
			$('#island').find('.floor2').css({transform: 'translate3d(0,'+(-(num-420)*20)+'%,0)'});
		}
		if(num>=425){
			$('#island').find('.floor2').css({transform: 'translate3d(0,-100%,0)'});
			$('#island').find('.floor3').find('.content').css({opacity:(num-425)*iO});
		}
		if(num>=430){
			$('#island').find('.floor3').find('.content').css({opacity:1});
			$('#island').find('.floor3').find('.left').css({height:(num-430)+'0%'});
			$('#island').find('.floor3').find('.right').css({height:(num-430)+'0%'});
		}
		if(num>=435){
			$('#island').find('.floor3').find('.left').css({height:'50%'});
			$('#island').find('.floor3').find('.right').css({height:'50%'});
		}
		if(num>=435){
			$('#island').find('.floor3').find('.box2').css({width: (num-435)+'0%'});
		}
		if(num>=440){
			$('#island').find('.floor3').find('.box3').css({width: (num-440)+'0%'});
		}
		if(num>=445){
			$('#island').find('.floor3').find('.box2').css({width: '100%'});
		}
		if(num>=450){
			$('#island').find('.floor3').find('.box3').css({width: '100%'});
		}
		if(num>=460){
			$('#island').find('.floor3').find('.top').css({height: (num-460)+'0%'});
			$('#island').find('.floor3').find('.bottom').css({height: (num-460)+'0%'});
		}
		if(num>=465){
			$('#island').find('.floor3').find('.top').css({height:'50%'});
			$('#island').find('.floor3').find('.bottom').css({height:'50%'});
		}
		if(num>=470){
			divsTop.eq(0).css({width:(num-470)+'0%'});
		}
		if(num>=474){
			divsTop.eq(1).css({width:(num-474)+'0%'});
		}
		if(num>=478){
			divsTop.eq(2).css({width:(num-478)+'0%'});
		}
		if(num>=482){
			divsTop.eq(3).css({width:(num-482)+'0%'});
		}
		if(num>=486){
			divsTop.eq(4).css({width:(num-486)+'0%'});
		}
		if(num>=490){
			divsTop.eq(5).css({width:(num-490)+'0%'});
		}
		if(num>=494){
			divsTop.eq(6).css({width:(num-494)+'0%'});
		}
		if(num>=498){
			divsTop.eq(7).css({width:(num-498)+'0%'});
		}
		divsTop.each(function(i,ele){
			var nub = parseInt(ele.style.width.replace('%',''));
			if(nub >= 100){
				ele.style.width = '100%';
			}
		});
		
		
		if(num>=510){
			divsBottom.eq(0).css({width:(num-510)+'0%'});
		}
		if(num>=514){
			divsBottom.eq(1).css({width:(num-514)+'0%'});
		}
		if(num>=518){
			divsBottom.eq(2).css({width:(num-518)+'0%'});
		}
		if(num>=522){
			divsBottom.eq(3).css({width:(num-522)+'0%'});
		}
		if(num>=526){
			divsBottom.eq(4).css({width:(num-526)+'0%'});
		}
		if(num>=530){
			divsBottom.eq(5).css({width:(num-530)+'0%'});
		}if(num>=534){
			divsBottom.eq(6).css({width:(num-534)+'0%'});
		}
		if(num>=538){
			divsBottom.eq(7).css({width:(num-538)+'0%'});
		}
		divsBottom.each(function(i,ele){
			var nub = parseInt(ele.style.width.replace('%',''));
			if(nub >= 100){
				ele.style.width = '100%';
			}
		});
		if(num>=540){
			$('#island').find('.video').css({transform: 'translate3d('+(10-(num-540))+'0%,0,0)'});
		}
		if(num>=550){
			$('#island').find('.video').css({transform: 'translate3d(0,0,0)'});
		}
		if(num>=555){
			$('#island').css({transform: 'translate3d(0,'+(-(num-555))+'0%,0)'});
		}
		if(num>=565){
			$('#island').css({transform: 'translate3d(0,-100%,0)'});
			$('#whale').find('.floor1').find('img').css({transform: 'translate3d(0,'+((565-num)*wH4/10)+'px,0)'});
			$('#whale').find('.floor1').find('.mask3').css({height:(100-(num-565)*20)+'%'});
		}
		//whale
		if(num>=570){
			$('#whale').find('.floor1').find('.mask3').css({height:0});
			$('#whale').find('.floor1').find('.mask2').css({height:(100-(num-570)*20)+'%'});
			$('#whale').find('.floor1').find('.content').css({opacity:(num-570)*iO});
		}
		if(num>=575){
			$('#whale').find('.floor1').find('.mask2').css({height:0});
			$('#whale').find('.floor1').find('img').css({transform: 'translate3d(0,'+(-wH4)+'px,0)'});
			$('#whale').find('.floor1').find('.content').css({opacity:1});
		}
		if(num>=580){
			$('#whale').find('.floor1').css({transform: 'translate3d(0,'+(-(num-580)*2)+'0%,0)'});
		}
		if(num>=585){
			$('#whale').find('.floor1').css({transform: 'translate3d(0,-100%,0)'});
		}
		if(num>=590){
			$('#whale').find('.floor2').find('.img').css({transform: 'translate3d('+(-(num-590)*wW/10)+'px,0,0)'});
		}
		if(num>=600){
			$('#whale').find('.floor2').find('.img').css({transform: 'translate3d('+(-wW)+'px,0,0)'});
		}
		if(num>=605){
			$('#whale').find('.floor2').css({transform: 'translate3d(0,'+(-(num-605))+'0%,0)'});
		}
		if(num>=610){
			$('#whale').find('.floor3').css({transform: 'translate3d(0,'+(5-(num-610))+'0%,0)'});
		}
		if(num>=615){
			$('#whale').find('.floor2').css({transform: 'translate3d(0,-100%,0)'});
			$('#whale').find('.floor3').css({transform: 'translate3d(0,0,0)'});
		}
		if(num>=620){
			$('#whale').find('.spin').find('img').eq(num-620).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num>=702){
			$('#whale').find('.spin').find('img').eq(82).css({display:'block'}).siblings('img').css({display:'none'});
		}
		if(num>=705){
			$('#whale').find('.video').css({transform: 'translate3d('+(10-(num-705))+'0%,0,0)'});
		}
		if(num>=715){
			$('#whale').find('.video').css({transform: 'translate3d(0,0,0)'});
		}
		//end
		if(num>=720){
			$('#whale').css({transform: 'translate3d(0,'+(-(num-720))+'0%,0)'});
		}
		if(num>=725){
			$('#end').css({transform: 'translate3d(0,'+(5-(num-725))+'0%,0)'});
		}
		if(num>=730){
			$('#whale').css({transform: 'translate3d(0,-100%,0)'});
			$('#end').css({transform: 'translate3d(0,0,0)'});
			$('#end').find('img').css({transform: 'scale('+(1+(num-730)/20)+')'});
		}
		if(num>=735){
			$('#buy').css({transform: 'translate3d(0,'+(17-(num-735))+'0%,0)'});
			$('#end').find('img').css({transform: 'scale(1.25)'});
		}
		if(num>=748){
			$('#buy').css({transform: 'translate3d(0,38%,0)'});
			num = 748;
		}

	})
	var playBtns = document.getElementsByClassName('videoBg');
	var video = document.getElementById('video');
	var src = video.getElementsByTagName('video')[0];
	
	console.log(playBtns.length);
	for (var i = 0;i<playBtns.length;i++) {
		playBtns[i].index = i;
		playBtns[i].onclick = function (){
			video.style.display = 'block';
			src.src = dataVideo[this.index];
			console.log(this.index);
		};
	}

	$('#video').find('.close').on('click',function (){
		$('#video').css({display:'none'});
		$('#video').find('video').attr('src','');
	});
})
