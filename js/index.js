function init(){
    
}

// 时间选择器初始化
function datePickerInit(){
    var datepicker = $(".ys-datetimepicker").find("input[name=certDate]").datetimepicker({
        format: "yyyy-mm-dd",
        todayBtn: "linked",
        startView: 2,
        minView: 2,
        autoclose: true,
        language: "zh-CN",
    }).on('changeDate', function(e){
    });
}
setTimeout(datePickerInit, 100)