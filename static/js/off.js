        // 1.禁用右键菜单
        document.addEventListener('contextmenu',function(e){
            e.preventDefault();  // 阻止默认事件
        });
        // 2.禁止鼠标选中
        document.addEventListener('selectstart',function(e){
            e.preventDefault();  
        });
        // 3.禁止键盘F12键
        document.addEventListener('keydown',function(e){
            if(e.key == 'F12'){
                e.preventDefault(); // 如果按下键F12,阻止事件
            }
        });
