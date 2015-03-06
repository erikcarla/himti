if(screen.width == '1024')
	{
		var loc = location.href;
		var spl = loc.split('website/');
		window.location.assign(spl[0]+'website/1024x768/index.html');
	}
$(document).ready(function() 
{	
	$("#vpb_pop_up_background").click(function()
	{
		$("#vpb_signup_pop_up_box").hide(); 
		$("#vpb_login_pop_up_box").hide();
		$("#vpb_pop_up_background").fadeOut("slow");
	});
	$("#galeri2").hide(); 
	$("#galeri3").hide(); 
	$("#nevent-content").hide();   
	$("#soft-content").hide();
	$("#hard-content").hide();   
	$("#event-content").hide();
	$("#isi2").hide();
	$("#isi3").hide();
	$("#submit").click(function()
	{
		var user=$('#usernames').val();
		var pass=$('#passs').val();
		if(!user){
			$('#error').html('Username Harus Diisi');
		}
		else if(!pass){
			$('#error').html('Password Harus Diisi');
		}
		else{
			$("#log").hide();
			$('#welcome').removeAttr('style');
			$("#vpb_signup_pop_up_box").hide(); 
			$("#vpb_login_pop_up_box").hide(); 
			$("#vpb_pop_up_background").fadeOut("slow");
			$('#welcome').append($('#usernames').val());
		}
	});
	$("#comment1").click(function()
	{
		var name=$('#nama').val();
		var email=$('#email').val();
		var com=$('#comment').val();
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var hours = d.getHours();
		var minute = d.getMinutes();
		var second = d.getSeconds();
		var tgl = d.getFullYear() + '-' +(month<10 ? '0' : '') + month + '-' +(day<10 ? '0' : '') + day +  ' ' +(hours<10 ? '0' : '') + hours + ':' +(minute<10 ? '0' : '') + minute + ':' +(second<10 ? '0' : '') + second ;
		if(!name){
			$('#error1').html('Nama Harus Diisi');
		}
		else if(!email){
			$('#error1').html('Email Harus Diisi');
		}
		else if(!emailReg.test( email )){
			$('#error1').html('Format Email Salah');
		}
		else if(!com){
			$('#error1').html('Comment Harus Diisi');
		}
		else{
			$('#nama').val('');
			$('#email').val('');
			$('#comment').val('');
			$("#content-comment").append('<strong style="font-size:20px;">'+name+'</strong><br/><span style="font-style:italic">'+tgl+'</span><br/>'+com+'<hr style="border-bottom: 1px dotted #CCC;">');	
			
		}
	});
	
});

function showone(){
	
	$("#isi2").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#isi3").animate({ height: 'hide', opacity: 'hide' }, 'slow');     
	$("#isi1").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#one').removeClass('tab-bar').addClass('tab-active');
	$('#two').removeClass('tab-active').addClass('tab-bar');
	$('#three').removeClass('tab-active').addClass('tab-bar');
}
function showtwo(){
	
	$("#isi3").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#isi1").animate({ height: 'hide', opacity: 'hide' }, 'slow');     
	$("#isi2").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#two').removeClass('tab-bar').addClass('tab-active');
	$('#one').removeClass('tab-active').addClass('tab-bar');
	$('#three').removeClass('tab-active').addClass('tab-bar');
}
function showthree(){
	
	$("#isi1").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#isi2").animate({ height: 'hide', opacity: 'hide' }, 'slow');     
	$("#isi3").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#three').removeClass('tab-bar').addClass('tab-active');
	$('#one').removeClass('tab-active').addClass('tab-bar');
	$('#two').removeClass('tab-active').addClass('tab-bar');
}

function showevent(){
	
	$("#galeri1").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#galeri3").animate({ height: 'hide', opacity: 'hide' }, 'slow');     
	$("#galeri2").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#event').removeClass('tab-bar').addClass('tab-active');
	$('#birth').removeClass('tab-active').addClass('tab-bar');
	$('#other').removeClass('tab-active').addClass('tab-bar');
}
function showbirth(){
	$("#galeri2").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#galeri3").animate({ height: 'hide', opacity: 'hide' }, 'slow');     
	$("#galeri1").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#birth').removeClass('tab-bar').addClass('tab-active');
	$('#event').removeClass('tab-active').addClass('tab-bar');
	$('#other').removeClass('tab-active').addClass('tab-bar');
}


function showother(){
	$("#galeri2").animate({ height: 'hide', opacity: 'hide' }, 'slow');      
	$("#galeri1").animate({ height: 'hide', opacity: 'hide' }, 'slow');      
	$("#galeri3").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#other').removeClass('tab-bar').addClass('tab-active');
	$('#birth').removeClass('tab-active').addClass('tab-bar');
	$('#event').removeClass('tab-active').addClass('tab-bar');
}

function showlife(){
	$("#nevent-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#soft-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');   
	$("#hard-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#event-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');   	
	$("#life-content").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#life').removeClass('tab-bar').addClass('tab-active');
	$('#soft').removeClass('tab-active').addClass('tab-bar');
	$('#hard').removeClass('tab-active').addClass('tab-bar');
	$('#aevent').removeClass('tab-active').addClass('tab-bar');
	$('#nevent').removeClass('tab-active').addClass('tab-bar');
}

function showsoft(){
	$("#nevent-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#life-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');   
	$("#hard-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#event-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');   	
	$("#soft-content").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#soft').removeClass('tab-bar').addClass('tab-active');
	$('#life').removeClass('tab-active').addClass('tab-bar');
	$('#hard').removeClass('tab-active').addClass('tab-bar');
	$('#aevent').removeClass('tab-active').addClass('tab-bar');
	$('#nevent').removeClass('tab-active').addClass('tab-bar');
}

function showhard(){
	$("#nevent-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#life-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');   
	$("#soft-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#event-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');   	
	$("#hard-content").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#hard').removeClass('tab-bar').addClass('tab-active');
	$('#life').removeClass('tab-active').addClass('tab-bar');
	$('#soft').removeClass('tab-active').addClass('tab-bar');
	$('#aevent').removeClass('tab-active').addClass('tab-bar');
	$('#nevent').removeClass('tab-active').addClass('tab-bar');
}

function showaevent(){
	$("#nevent-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#life-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');   
	$("#soft-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#hard-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');   
	$("#event-content").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#aevent').removeClass('tab-bar').addClass('tab-active');
	$('#life').removeClass('tab-active').addClass('tab-bar');
	$('#soft').removeClass('tab-active').addClass('tab-bar');
	$('#hard').removeClass('tab-active').addClass('tab-bar');
	$('#nevent').removeClass('tab-active').addClass('tab-bar');
}

function shownevent(){
	$("#event-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#life-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');   
	$("#soft-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');    
	$("#hard-content").animate({ height: 'hide', opacity: 'hide' }, 'slow');   
	$("#nevent-content").animate({ height: 'show', opacity: 'show' }, 'slow'); 
	$('#nevent').removeClass('tab-bar').addClass('tab-active');
	$('#life').removeClass('tab-active').addClass('tab-bar');
	$('#soft').removeClass('tab-active').addClass('tab-bar');
	$('#hard').removeClass('tab-active').addClass('tab-bar');
	$('#aevent').removeClass('tab-active').addClass('tab-bar');
}

function vpb_show_sign_up_box()
{
	$("#vpb_pop_up_background").css({
		"opacity": "0.4"
	});
	$("#vpb_pop_up_background").fadeIn("slow");
	$("#vpb_signup_pop_up_box").fadeIn('fast');
}


function vpb_show_login_box()
{
	$("#vpb_pop_up_background").css({
		"opacity": "0.4"
	});
	$("#vpb_pop_up_background").fadeIn("slow");
	$("#vpb_login_pop_up_box").fadeIn('fast');
}

function vpb_hide_popup_boxes()
{
	$("#vpb_signup_pop_up_box").hide(); 
	$("#vpb_login_pop_up_box").hide(); 
	$("#vpb_pop_up_background").fadeOut("slow");
}




