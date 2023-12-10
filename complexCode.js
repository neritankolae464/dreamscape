/*
Filename: complexCode.js

This code is a complex and elaborate implementation of a file management system. It simulates a virtual file system that allows users to create, delete, and manipulate files and directories.

Note: This code is purely for demonstration purposes and may not work in a browser environment. It is meant to showcase complex JavaScript concepts and programming techniques.

*/

// Define the File class
class File {
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

  getSize() {
    return this.size;
  }
}

// Define the Directory class
class Directory {
  constructor(name) {
    this.name = name;
    this.files = [];
    this.directories = [];
  }

  addFile(file) {
    this.files.push(file);
  }

  deleteFile(fileName) {
    this.files = this.files.filter((file) => file.name !== fileName);
  }

  addDirectory(directory) {
    this.directories.push(directory);
  }

  deleteDirectory(directoryName) {
    this.directories = this.directories.filter((dir) => dir.name !== directoryName);
  }

  getTotalSize() {
    let totalSize = this.files.reduce((sum, file) => sum + file.getSize(), 0);
    this.directories.forEach((dir) => {
      totalSize += dir.getTotalSize();
    });
    return totalSize;
  }
}

// Test the file management system
const root = new Directory("Root");

const dir1 = new Directory("Folder 1");
const dir2 = new Directory("Folder 2");

const file1 = new File("File 1", 100);
const file2 = new File("File 2", 50);
const file3 = new File("File 3", 75);

root.addDirectory(dir1);
root.addDirectory(dir2);

dir1.addFile(file1);
dir2.addFile(file2);
dir2.addFile(file3);

console.log("Total size of root directory:", root.getTotalSize());

dir2.deleteFile("File 2");
console.log("Total size of root directory after deleting File 2:", root.getTotalSize());

root.deleteDirectory("Folder 1");
console.log("Total size of root directory after deleting Folder 1:", root.getTotalSize());

// ... (more complex operations and scenarios)

// Note: This code is highly simplified and does not include error handling or advanced file management features.