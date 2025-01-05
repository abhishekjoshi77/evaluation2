function segregateFiles(fileNames) {
  return fileNames.reduce((acc, fileName) => {
    const extension = fileName.split('.').pop(); 
    if (!acc[extension]) {
      acc[extension] = []; 
    }
    acc[extension].push(fileName); 
    return acc;
  }, {}); 
}

// Given filenames
const files = [
  "document1.pdf",
  "document2.pdf",
  "image1.png",
  "image2.png",
  "text1.txt",
  "text2.txt",
  "photo1.jpg",
  "photo2.jpg",
  "program1.exe",
  "program2.exe",
  "data1.csv",
  "data2.csv",
  "report1.pdf",
  "report2.pdf",
  "image3.png",
  "text3.txt",
  "photo3.jpg",
  "document3.pdf"
];

// Function call
const result = segregateFiles(files);
console.log(result);


