// 获取所有的行
const rows = document.querySelectorAll('#ui ul li')
// 获取html元素
const html = document.documentElement

// 监听滚动事件
document.addEventListener("scroll", (e) => {
    // 计算滚动的百分比
    let scrolled = html.scrollTop / (html.scrollHeight - html.clientHeight)

    // 计算每一行的百分比
    let total = 1 / rows.length

    // 遍历每一行
    for (let [index, row] of rows.entries()) {
        // 计算当前行的起始和结束位置
        let start = total * index
        let end = total * (index + 1)

        // 计算当前行的进度
        let progress = (scrolled - start) / (end - start)
        if (progress >= 1) {
            progress = 1
        }
        if (progress <= 0) {
            progress = 0
        }

        // 设置当前行的进度
        row.style.setProperty('--progress', progress)
    }
})
