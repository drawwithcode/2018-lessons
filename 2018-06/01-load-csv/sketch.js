var myTable;

function preload() {
	// My table is comma separated value "csv".
	// It could be tab-separated “TSV”
	// and has a header specifying the columns labels
	myTable = loadTable("assets/mammals.csv", "csv", "header");
	// The file can be remote:
	// myTable = loadTable("http://p5js.org/reference/assets/mammals.csv", "csv", "header");

}

function setup() {
	// put setup code here
	myTable = myTable.getObject();

	console.log(myTable)
	// console.log(myTable);
	for (var rowIndex in myTable) {
		var row = myTable[rowIndex];
		//now you can access values by column name
		console.log(row['name']);

	}
}

function draw() {
	// put drawing code here
}
