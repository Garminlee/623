function animate(obj, target, callback) {
    // 为了防止多次点击导致加了多个定时器 使得动画越来越快 所以每次触发前先清除定时器
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // 设置动画步长 匀速就是固定步长  缓慢动画就是步长逐渐变小 算法是 （目标数-当前位置） / 10
        var step = (target - obj.offsetLeft) / 10;
        // 但是由于除法中会出现小数的情况，所以最后有可能不到达到具体的目标位置 ，这时候就要考虑取整问题 
        // 又因为如果步长为正值，那么就应该向上取整，若为负值，则应该向下取整
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        // 设置定时器停止
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // 回调函数要写在定时器结束里面
            if (callback) {
                callback();
            }
        }

        obj.style.left = obj.offsetLeft + step + 'px';
    }, 15)
}