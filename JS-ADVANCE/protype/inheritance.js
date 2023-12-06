let parent = {
	rambut: 'hitam',
	mata: 'coklat'
};

let child = Object.create(parent);

console.log(`Parent mempunyai rambut ${parent.rambut} dan mata ${parent.mata}`);
// Parent mempunyai rambut hitam dan mata coklat

console.log(
	`Child mempunyai rambut ${child.rambut} dan mata ${child.mata}
   `
); // Child mempunyai rambut hitam dan mata coklat

// ========================================= UBAH WARNA RAMBUT PARENT
console.log(`Ubah rambut parent jadi MERAH
`);
parent.rambut = 'merah';

console.log(`Parent mempunyai rambut ${parent.rambut} dan mata ${parent.mata}`);
// Parent mempunyai rambut merah dan mata coklat

console.log(
	`Child mempunyai rambut ${child.rambut} dan mata ${child.mata}
   `
); // Child mempunyai rambut merah dan mata coklat

// ========================================= UBAH WARNA MATA CHILD
console.log(`Ubah mata parent jadi hitam
`);
child.mata = 'hitam';

console.log(`Parent mempunyai rambut ${parent.rambut} dan mata ${parent.mata}`);
// Parent mempunyai rambut merah dan mata coklat

console.log(`Parent mempunyai rambut ${child.rambut} dan mata ${child.mata}`);
// Child mempunyai rambut merah dan mata Hitam
