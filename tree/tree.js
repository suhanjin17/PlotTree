function buildTree(data)
{
    const tree = [];
    const lookup = {};

    // Initialize lookup object
    data.forEach(item => lookup[item.id] = { ...item, children: [] });

    // Populate children based on parentID
    data.forEach(item =>
	{
        if (item.parentID === null || item.parentID === "") tree.push(lookup[item.id]);
        else if (lookup[item.parentID])
			lookup[item.parentID].children.push(lookup[item.id]);
    });
    return tree;
}

function buildNode(node)
{
    const li = document.createElement('li');

    // Get type configuration, fallback to a default style if type is missing
    const config = nodeTypeConfig[node.type] || { width: "150px", borderStyle: "solid", color: "#aaaaaa", textColor: "#ffffff" };

    const div = document.createElement('div');
    div.className = 'node'; // Base class only
    
    // Apply dynamic styles from configuration
    div.style.width = config.width;
    div.style.border = `2px ${config.borderStyle} ${config.color}`;

    div.onclick = () =>
	{
		const event = new CustomEvent('nodeClicked',
		{
			detail: {
				title: node.modalTitle,
				summary: node.modalSummary,
				detailObj: node.detail
			}
		});
		document.dispatchEvent(event);
	}

    const headerDiv = document.createElement('div');
    headerDiv.className = 'node-header';

    const nodeIdLabel = document.createElement('div');
    nodeIdLabel.className = 'node-id';
    nodeIdLabel.innerText = `NODE_${node.id}`;

    const nodeTypeLabel = document.createElement('div');
    nodeTypeLabel.className = 'node-type';
    nodeTypeLabel.innerText = node.type;
    
    // Apply dynamic styles to the label
    nodeTypeLabel.style.backgroundColor = config.color;
    nodeTypeLabel.style.color = config.textColor;

    headerDiv.appendChild(nodeIdLabel);
    headerDiv.appendChild(nodeTypeLabel);

    const h3 = document.createElement('h3'); h3.innerText = node.title;
    const p = document.createElement('p'); p.innerText = node.summary;

    div.appendChild(headerDiv);
    div.appendChild(h3);
    div.appendChild(p);
	
    li.appendChild(div);

    if (node.children && node.children.length > 0)
	{
        const ul = document.createElement('ul');
        node.children.forEach(child => ul.appendChild(buildNode(child)));
        li.appendChild(ul);
    }
    return li;
}

// Initialize rendering on window load
window.onload = function()
{
    // Render the tree starting from root nodes
    const rootUl = document.createElement('ul');
	const tree = buildTree(nodes)

    tree.forEach(rootNode =>  rootUl.appendChild(buildNode(rootNode)));
    
    document.getElementById('tree-container').appendChild(rootUl);
};