function thousands(num: number | string, minimumFractionDigits = 2):string | number {
    // 默认保留两位小数
    if (num === null || num === undefined) {
        return num;
    }
    const result = parseFloat(num + '');
    if (!Number.isNaN(result)) {
        return result.toLocaleString('zh', {
            minimumFractionDigits,
        });
    }
    console.error('类型错误 千分符方法只支持数字和字符串数字');
    return num ;
}

function percent(num: number | string, minimumFractionDigits = 2):string | number {
    // 默认保留两位小数
    if (num === null || num === undefined) {
        return num;
    }
    const result = parseFloat(num + '');
    if (!Number.isNaN(result)) {
        return result.toLocaleString('zh', {
            minimumFractionDigits,
            style: 'percent',
        });
    }
    console.error('类型错误 只支持数字和字符串数字');
    return num;
}

export {
    thousands, percent,
};
