function CRid(id){return!id?null:document.getElementById(id)}function CRclassAdd(obj,name){obj.className+=' '+name}function CRclassRemove(obj,name){obj.className=obj.className.replace(' '+name,' ')}function CRshowmenu(oid,clname,absolute){var objMenu=CRid(oid+'_c');var oBj=CRid(oid);if(objMenu.style.display=='none'){objMenu.style.display='block';CRclassAdd(CRid(oid),clname)}else{objMenu.style.display='none';CRclassRemove(CRid(oid),clname)}if(absolute){var oBjlr=fetchOffset(oid);objMenu.style.left=oBjlr.left+'px';objMenu.style.top=absolute.height+oBjlr.top+'px';objMenu.style.position='absolute';setMenuPosition(oid,oid+'_c','43')}}function CRhideMenu(oid,clname){CRid(oid+'_c').style.display='none';CRclassRemove(oid,clname)}function cr180_swap_rtopfori(tag,s){if(tag.className||s){tag.className=''}else{tag.className='a'}}function cr180_swap_displaybox(id,classname,cookie){if(!classname)classname='a';if(!cookie)cookie='none';var cookievalue='block';var idMenu=CRid(id+'_menu');if(idMenu.style.display=='none'){idMenu.style.display='block';CRclassAdd(CRid(id),classname)}else{cookievalue='none';idMenu.style.display='none';CRclassRemove(CRid(id),classname)}if(cookie&&cookievalue){setcookie('displaybox_'+id,cookievalue)}}function CR_setTab(oid,indexs,clname){var sel=CRid(oid.id).getElementsByTagName(oid.tag);for(var i=0;i<sel.length;i++){CRclassRemove(sel[i],clname)}CRclassAdd(sel[indexs],clname)}function CR_insertText(obj,str){if(document.selection){var sel=document.selection.createRange();sel.text=str}else if(typeof obj.selectionStart==='number'&&typeof obj.selectionEnd==='number'){var startPos=obj.selectionStart,endPos=obj.selectionEnd,cursorPos=startPos,tmpStr=obj.value;obj.value=tmpStr.substring(0,startPos)+str+tmpStr.substring(endPos,tmpStr.length);cursorPos+=str.length;obj.selectionStart=obj.selectionEnd=cursorPos}else{obj.value+=str}}function CR_ajaxgetforumlist(page,fid){ajaxget('forum.php?mod=forumdisplay&fid='+fid+'&page='+page+'','ajaxgetlist_page'+(page-1)+'')}function cr180_swap_scrollTo(){var Hei=(document.body.scrollHeight)*99999999999999;window.scrollTo(0,Hei)}function errorhandle_Cr180return(dts){alert(dts)}function succeedhandle_Cr180return(url,message,data){CRid('cr180_comment_'+data.pid).innerHTML='';ajaxget('forum.php?mod=misc&action=commentmore&tid='+data.tid+'&pid='+data.pid+'','comment_'+data.pid)}function CR_commentpost(formid){var formObj=CRid(formid);var postdata='&handlekey='+formObj.handlekey.value;var postdata=postdata+'&formhash='+formObj.formhash.value;var postdata=postdata+'&message='+(formObj.message.value);var postdata=postdata+'&commentsubmit='+formObj.commentsubmit.value;var x=new Ajax();x.setLoading();x.WaitId=formid;x.display=typeof display=='undefined'||display==null?'':display;x.showId=CRid(formid);var url=formObj.getAttribute('action');var url=url+'&inajax=1&ajaxtarget='+formid;x.post(url,postdata,function(s,x){var jsdata=CR_evalscript(s);eval(jsdata)});return false}function CR_evalscript(s){var s=s.replace(/([\s\S]*)<script([^\>]*?)>([\s\S]*)<\/script>([\s\S]*)$/ig,"$3");return s}