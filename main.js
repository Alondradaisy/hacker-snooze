const body = document. querySelector('body');

const parent = document.createElement('div');
parent.className = 'parent';

const child = document.createElement('div');
child.className = 'child';

parent.appendChild(child);
body.appendChild(parent);
