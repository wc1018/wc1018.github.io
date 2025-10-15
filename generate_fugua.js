const fs = require('fs');
const path = require('path');

const fugua = {
    "00": "坤为地", "70": "山地剥", "60": "水地比", "50": "风地观",
    "40": "雷地豫", "30": "火地晋", "20": "泽地萃", "10": "天地否",

    "07": "地山谦", "77": "艮为山", "67": "水山蹇", "57": "风山渐",
    "47": "雷山小过", "37": "火山旅", "27": "泽山咸", "17": "天山遁",

    "06": "地水师", "76": "山水蒙", "66": "坎为水", "56": "风水涣",
    "46": "雷水解", "36": "火水未济", "26": "泽水困", "16": "天水讼",

    "05": "地风升", "75": "山风蛊", "65": "水风井", "55": "巽为风",
    "45": "雷风恒", "35": "火风鼎", "25": "泽风大过", "15": "天风姤",

    "04": "地雷复", "74": "山雷颐", "64": "水雷屯", "54": "风雷益",
    "44": "震为雷", "34": "火雷噬嗑", "24": "泽雷随", "14": "天雷无妄",

    "03": "地火明夷", "73": "山火贲", "63": "水火既济", "53": "风火家人",
    "43": "雷火丰", "33": "离为火", "23": "泽火革", "13": "天火同人",

    "02": "地泽临", "72": "山泽损", "62": "水泽节", "52": "风泽中孚",
    "42": "雷泽归妹", "32": "火泽睽", "22": "兑为泽", "12": "天泽履",

    "01": "地天泰", "71": "山天大畜", "61": "水天需", "51": "风天小畜",
    "41": "雷天大壮", "31": "火天大有", "21": "泽天夬", "11": "乾为天"
};

// 输出文件夹
const outputDir = path.join(__dirname, 'fugua64');
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir);

// 生成 HTML 文件
for (const [code, name] of Object.entries(fugua)) {
    const filename = path.join(outputDir, `${name}.html`);
    
    // ✅ 如果文件已存在则跳过
    if (fs.existsSync(filename)) {
        console.log(`⚠️ 已存在：${name}.html，跳过生成`);
        continue;
    }

    const content = `
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>${name}</title>
  <style>
    body { font-family: "Noto Serif SC", serif; padding: 2em; line-height: 1.8; background: #faf9f7; }
    h1 { color: #5a2d82; }
    a { color: #5a2d82; text-decoration: none; }
  </style>
</head>
<body>
  <h1>${name}</h1>
  <p>这是 ${name} 的页面内容。</p>
  <p><a href="../index.html">← 返回主页</a></p>
</body>
</html>`;

    fs.writeFileSync(filename, content.trim());
    console.log(`✅ 已生成：${name}.html`);
}

console.log("\n🎉 所有卦象页面已生成完毕！");
