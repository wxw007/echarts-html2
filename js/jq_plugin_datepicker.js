/**
 * Created by whobird on 17/12/26.
 */
/*globals jQuery, define, module, exports, require, window, document, postMessage */
(function (factory) {
    "use strict";
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    }
    else if(typeof module !== 'undefined' && module.exports) {
        module.exports = factory(require('jquery'));
    }
    else {
        factory(jQuery);
    }
})(function ($, undefined) {
    "use strict";

    var nameSpace="ys_datepicker_"+new Date().getTime();


    function gd(year, month, day) {
        return new Date(year, month, day).getTime();
    }

    function DateAdd(interval,number,dateStr){

        // DateAdd(interval,number,date)
        var date = new Date(dateStr);

        var d="";
        switch(interval)
        {
            case   "y"   :   {
                date.setFullYear(date.getFullYear()+number);
                d=date.getFullYear();
                break;
            }
            case   "q"   :   {
                date.setMonth(date.getMonth()+number*3);
                break;
            }
            case   "m"   :   {
                date.setMonth(date.getMonth()+number);
                d=  date.getFullYear()+"-"+(date.getMonth()<9?("0"+(date.getMonth()+1)):(date.getMonth()+1));
                break;
            }
            case   "w"   :   {
                date.setDate(date.getDate()+number*7);
                d =date.getFullYear()+"-"+(date.getMonth()<9?("0"+(date.getMonth()+1)):(date.getMonth()+1))+"-"+(date.getDate()<9?("0"+date.getDate()):date.getDate());
                break;
            }
            case   "d"   :   {
                date.setDate(date.getDate()+number);
                break;
            }
            case   "h"   :   {
                date.setHours(date.getHours()+number);
                break;

            }
            case   "mi"   :   {
                date.setMinutes(date.getMinutes()+number);
                break;
            }
            case   "s"   :   {
                date.setSeconds(date.getSeconds()+number);
                break;
            }
            default   :   {
                date.setDate(date.getDate()+number);
                break;
            }

        }//end switch
        if(d!=""){
            return d;
        }else{
            return date.getFullYear()+"-"+(date.getMonth()<9?("0"+(date.getMonth()+1)):(date.getMonth()+1))+"-"+(date.getDate()<9?("0"+date.getDate()):date.getDate());
        }
    };

    var methods={
         init:function(options) {

             var _that=this;
             var mergedOptions;
             mergedOptions = $.extend(
                 true, {}, $.fn.ysDatepicker.defaults, options,
                 {
                     //内部附加的属性，比如获取到的子元素
                     current: 0,
                 }
             );//end extend

             return _that.each(function(i,elem){
                var $elem=$(elem);

                var $_prevBtn=$elem.find(".js-date-prev");
                var $_nextBtn=$elem.find(".js-date-next");

                var $_dateInput=$elem.find("input");
                if(!$_dateInput.attr("name")){
                    $_dateInput.attr("name",mergedOptions.namespace||nameSpace);
                }

                var format,startView,minView,dateAddType;
                if(mergedOptions.dateType=="month"){
                    format="yyyy-mm";
                    startView=3;
                    minView=3;
                    dateAddType="m";
                }else if(mergedOptions.dateType=="year"){
                    format="yyyy";
                    startView=4;
                    minView=4;
                    dateAddType="y";
                }else if(mergedOptions.dateType=="day"){
                    //day不建议使用这种形式
                    format="yyyy-mm-dd";
                    startView=2;
                    minView=2;
                    dateAddType="d";
                }else{
                    return;
                }

                 $_dateInput.datetimepicker({
                     format:format,
                     todayBtn:"linked",
                     startView:startView,
                     minView:minView,
                     autoclose: true,
                     language:"zh-CN",
                 }).on('changeDate', function(e){
                     var _date=$(this).val();
                     $(this).data("show","hide");
                     mergedOptions.callback(_date);
                 })

                //按钮点击
                 $elem.find("button").on("click",function(e){
                     var curButton=$(this).data("id");

                     var plus=1;
                     if(curButton=="js-date-prev"){
                         plus=-1;
                     }

                     e.preventDefault();

                     var dateStr=$elem.find("input").val()||"";



                     if(dateStr==""){
                         var today=new Date();
                         var newDate=DateAdd(dateAddType,plus,today);

                         $_dateInput.val(newDate);
                         $_dateInput.datetimepicker("update");
                     }else{

                         var curDateStr= dateStr.split("-");

                         var curDate;

                         if(mergedOptions.dateType=="month"){

                             curDate=gd(parseInt(curDateStr[0]),parseInt(curDateStr[1])-1,15);

                         }else if(mergedOptions.dateType=="year"){

                             curDate=gd(parseInt(curDateStr[0]),6,15);

                         }else if(mergedOptions.dateType=="day"){

                             curDate=gd(parseInt(curDateStr[0]),parseInt(curDateStr[1])-1,parseInt(curDateStr[2]));

                         }else{
                             return;
                         }

                         var newDate=DateAdd(dateAddType,plus,curDate);

                         $_dateInput.val(newDate);
                         $_dateInput.datetimepicker("update");

                         mergedOptions.callback(newDate);
                     }
                 });

            });

         },//init
        destroy:function(){
            this.each(function(i,elem){
                var $elem=$(elem);

            });
        }

    };

    $.fn.ysDatepicker=function(method){

        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if ($.type(method) === 'object') {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jq_dropdwon');
        }
    };

    $.fn.ysDatepicker.defaults={
        dateType:"month",//year,day
        callback:function(value){
            //console.log(value);
        }
    };
})