// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
"Hello! What would you like to bake?",
// additions (not original)
"Hi! Would you like to bake a cake? Muffins? Cookies?",
"Have a recipe ready in a matter of seconds!"
];

var elizaFinals = [ // what to return after user is done
"Enjoy!",
// additions (not original)
"Goodbye! I hope you enjoy your baked goods!.",
"I'm glad I could help you today!",
"Enjoy! Remember, sharing is caring!",
];

var elizaQuits = [ // user input when done
"bye",
"goodbye",
"done",
"exit",
"thank you",
"quit",
"great"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"muffin", "muffins",
"pie", "pies",
"cake", "cakes",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"cookie", "cookies",
"brownie", "brownies",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"],
"idk":["i don't know"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [  // give random recipes
 ["*", [
     "I think you might enjoy this\nLemon Scones\n3 cups all-purpose flour\n1/3 cup white sugar\n1 1/2 teaspoons baking powder\n1 1/2 teaspoons baking soda\n1/3 teaspoon salt\n3/4 cup cold butter, cut into pieces\n9 tablespoons milk\n3 tablespoons lemon juice\n2 1/2 teaspoons lemon zest\n1 1/2 teaspoons vinegar\n350 degrees F for 12 to 15 minutes\nMore information at allrecipes.com",
     "Try making this:\nDirt Cake:\n32 ounces chocolate sandwich cookies with creme filling\n1 (8 ounce) package cream cheese, softened\n1/2 cup butter, softened\n1/2 cup confectioners' sugar\n3 1/2 cups milk\n1 (12 ounce) container frozen whipped topping, thawed\n2 (3.5 ounce) packages instant vanilla pudding mix\nMore information at allrecipes.com",
     "Here's a suggestion:\nTres Leches\n1 1/2 cups all-purpose flour\n1 teaspoon baking powder\n1/2 cup unsalted butter\n1 cup white sugar\n5 eggs\n1/2 teaspoon vanilla extract\n2 cups whole milk\n1 (14 ounce) can sweetened condensed milk\n1 (12 fluid ounce) can evaporated milk\n1 1/2 cups heavy whipping cream\n1 cup white sugar\n1 teaspoon vanilla extract\n350 degrees F for 30 minutes\nMore information at allrecipes.com",
     "Give this a try:\nDanish Cinnamon Snails:\n1 cup warm milk\n3 (0.6 ounce) cakes cake yeast\n6 1/2 tablespoons butter, room temperature\n2 eggs\n1/2 teaspoon ground cardamom\n2 tablespoons white sugar\n1/4 teaspoon salt\n4 cups all-purpose flour\n425 degrees F for 10 minutes\nMore information at allrecipes.com",
     "This seems interesting:\n White Chocolate Blondies\n8 ounces white chocolate, chopped\n1/2 cup butter, softened\n1 1/4 cups all-purpose flour\n3/4 teaspoon salt\n2 large eggs\n1/3 cup white sugar\n1 tablespoon vanilla extract\n1 cup semisweet chocolate chips\n350 degrees F for 25 minutes\nMore information at allrecipes.com"

  ]]
]],
["cookies", 0, [  // cookies
 ["*", [
     "Chocolate Chip Cookies:\n1 cup packed brown sugar\n2 eggs\n2 teaspoons vanilla extract\n1 teaspoon baking soda\n2 teaspoons hot water\n1/2 teaspoon salt\n3 cups all-purpose flour\n2 cups semisweet chocolate chips\n1 cup chopped walnuts\n350 degrees F for 10 mins\nMore information at allrecipes.com",
     "Ginger Cookies:\n2 tablespoons white sugar\n2 1/4 cups all-purpose flour\n2 teaspoons ground ginger\n1 teaspoon baking soda\n3/4 teaspoon ground cinnamon\n1/2 teaspoon ground cloves\n1/4 teaspoon salt\n3/4 cup margarine, softened\n1 cup white sugar\n1 large egg\n1/4 cup molasses\n1 tablespoon water\n350 degrees F for 8-10 minutes\nMore information at allrecipes.com",
     "Double Chocolate Chip Cookies:\n1 cup margarine, softened\n1 cup white sugar\n1 cup brown sugar\n2 eggs\n1 teaspoon vanilla extract\n2 cups all-purpose flour\n1 teaspoon baking soda\n1 teaspoon salt\n1/3 cup unsweetened cocoa powder\n3 cups semisweet chocolate chips\n375 degrees F for 8-10 minutes\nMore information at allrecipes.com",
     "Peanut Butter Bup Cookies\n1 3/4 cups all-purpose flour\n1/2 teaspoon salt\n1 teaspoon baking soda\n1/2 cup butter, softened\n1/2 cup white sugar\n1/2 cup peanut butter\n1/2 cup packed brown sugar\n1 egg\n1 teaspoon vanilla extract\n2 tablespoons milk\n40 miniature chocolate covered peanut butter cups, unwrapped\nMore information at allrecipes.com",
     "Pecan Pie Cookies:\n1/4 cup butter\n1/2 cup confectioners' sugar\n3 tablespoons light corn syrup\n3/4 cup finely chopped pecans\n2 cups all-purpose flour\n1 teaspoon baking powder\n1 cup brown sugar, packed\n3/4 cup butter, softened\n1 large egg\n1 teaspoon vanilla extract\n350 degrees F for 10-13 minutes\nMore information at allrecipes.com",
     "Chocolate Covered Cherry:\n1 cup white sugar\n1/2 cup butter\n1 egg\n1 1/2 teaspoons vanilla extract\n1 1/2 cups all-purpose flour\n1/2 cup unsweetened cocoa powde\n1/4 teaspoon salt\n1/4 teaspoon baking soda\n1/4 teaspoon baking powder\n1 (10 ounce) jar maraschino cherries\n1/2 cup sweetened condensed milk\n1 cup semisweet chocolate chips\n 350 degrees F for 10 minutes\nMore information at allrecipes.com",
     "Chewy Chocolate Chip Oatmeal Cookies:\n1 cup butter, softened\n1 cup packed light brown sugar\n1/2 cup white sugar\n2 eggs\n2 teaspoons vanilla extract\n1 1/4 cups all-purpose flour\n1/2 teaspoon baking soda\n1 teaspoon salt\n3 cups quick-cooking oats\n1 cup chopped walnuts\n1 cup semisweet chocolate chips\n325 degrees F for 12 minutes\nMore information at allrecipes.com"
  ]]
]],
["i don't know", 0, [ // i dont know -> give random recipes
 ["*", [
     "goto xnone"
  ]]
]],

["cake", 0, [   // cake
 ["*", [
     "Carrot cake: \n2 cups white sugar\n1 1/4 cups vegetable oil\n4 eggs\n2 teaspoons vanilla extract\n2 cups all-purpose flour\n2 teaspoons baking soda\n2 teaspoons baking powder\n1/2 teaspoon salt\n3 cups grated carrots\n1 cup chopped pecans\n350 degrees F for 40 minutes\nMore information at allrecipes.com",
     "Texas Sheet Cake\n2 cups all-purpose flour\n2 cups white sugar\n1 teaspoon baking soda\n1/2 teaspoon salt\n1/2 cup sour cream\n2 eggs\n1 cup butter\n1 cup water\n5 tablespoons unsweetened cocoa powder\350 degrees F for 20 minutes\nMore information at allrecipes.com",
     "Lemon Bundt Cake:\n1 cup butter, softened\n2 cups white sugar\n5 large eggs\2 cups all-purpose flour\n1/4 cup fresh lemon juice\n1 large lemon, zested\n325 degrees F for 45 to 55 minutes\nMore information at allrecipes.com",
     "Back-of-the-Box Hershey's Chocolate Cake:\n2 cups white sugar\n1 3/4 cups all-purpose flour\n3/4 cup unsweetened cocoa powder\n1 1/2 teaspoons baking soda\n1 1/2 teaspoons baking powder\n1 teaspoon salt\n2 large eggs\n1 cup milk\n1/2 cup vegetable oil\n2 teaspoons vanilla extract\n1 cup boiling water\n350 degrees F for 30-35\nMore information at allrecipes.com"
  ]]
]],

["pie", 0, [
  ["*", [
     "Pumpkin Pie:\n1 (15 ounce) can pumpkin puree\n1 (14 ounce) can EAGLE BRAND® Sweetened Condensed Milk\n2 large eggs\n1 teaspoon ground cinnamon\n½ teaspoon ground ginger\n1/2 teaspoon ground ginger\1/2 teaspoon ground nutmegn\n½ teaspoon salt\n1 (9 inch) unbaked pie crust\n425 degrees for 35-40 minutes\nMore information at allrecipes.com",
     "Apple Pie by Grandma Ople:\n8 small Granny Smith apples, or as needed\n1/2 cup unsalted butter\n3 tablespoons all-purpose flour\n1/2 cup white sugar\n1/2cup packed brown sugar\1/4 cup water\n1 (9 inch) double-crust pie pastry, thawed\n425 degrees F for 35 to 45 minutes\nMore information at allrecipes.com",
     "Pecan Pie:\n1 3/4 cups white sugar\n1/4 cup dark corn syrup\n1/4 cup butter\n1 tablespoon cold water\n2 teaspoons cornstarch\n3 eggs\n1/4 teaspoon salt\n1 teaspoon vanilla extract\n1 1/4 cups chopped pecans\n1 (9 inch) unbaked pie shell\n 350 degrees for 45 to 50 minutes\nMore information at allrecipes.com",
     "Banana Cream Pie:\n3/4 cup white sugar\n1/3 cup all-purpose flour\n1/4 teaspoon salt\n2 cups milk\n3 egg yolks, beaten\n2 tablespoons butter\n1 1/4 teaspoons vanilla extract\n1 (9 inch) baked pastry shell, cooled\n4 bananas, sliced\n350 degrees for 15 minutes\nMore information at allrecipes.com",
     "Chocolate Pecan Pie:\n1 cup light corn syrup\n2/3 cup white sugar\n1/3 cup margarine, melted\n3 large eggs\n1/2 teaspoon salt\n1 1/2 cups semisweet chocolate chips\n1 cup pecan halves\n1 (9 inch) unbaked pie crust\n375 degrees for 40-50 minutes\nMore information at allrecipes.com"
  ]]
]],
["apple pie", 1, [ // pie
 ["*", [
     "Apple Pie by Grandma Ople:\n8 small Granny Smith apples, or as needed\n1/2 cup unsalted butter\n3 tablespoons all-purpose flour\n1/2 cup white sugar\n1/2cup packed brown sugar\1/4 cup water\n1 (9 inch) double-crust pie pastry, thawed\n425 degrees F for 35 to 45 minutes\nMore information at allrecipes.com",
  ]]
]],

["banana cream pie", 1, [ // pie
 ["*", [
     "Banana Cream Pie:\n3/4 cup white sugar\n1/3 cup all-purpose flour\n1/4 teaspoon salt\n2 cups milk\n3 egg yolks, beaten\n2 tablespoons butter\n1 1/4 teaspoons vanilla extract\n1 (9 inch) baked pastry shell, cooled\n4 bananas, sliced\n350 degrees for 15 minutes\nMore information at allrecipes.com",
  ]]
]],

["chocolate pie", 1, [ // pie
 ["*", [
     "Chocolate Pecan Pie:\n1 cup light corn syrup\n2/3 cup white sugar\n1/3 cup margarine, melted\n3 large eggs\n1/2 teaspoon salt\n1 1/2 cups semisweet chocolate chips\n1 cup pecan halves\n1 (9 inch) unbaked pie crust\n375 degrees for 40-50 minutes\nMore information at allrecipes.com"
  ]]
]],


["muffins", 0, [
 ["*", [
     "Banana Muffins:\n1 1/2 cups all-purpose flour\n1 teaspoon baking powder\n1 teaspoon baking soda\n1/2 teaspoon salt\n3 large bananas, mashed\n3/4 cup white sugar\n1 egg\n1/3 cup butter, melted\n350 degrees F for 25 to 30 minutes\nMore information at allrecipes.com",
     "Chocolate Muffins:\n3/4 cup milk\n1/3 cup vegetable oil\n1 egg\n2 cups all-purpose flour\n1/2 cup white sugar\n3 teaspoons baking powder\n1/2 teaspoon salt\n3/4 cup mini semi-sweet chocolate chips\n3 tablespoons white sugar\n2 tablespoons brown sugar\n 400 degrees F for 20-25 minutes\nMore information at allreicpes.com",
     "Carrot Muffins:\n2 cups all-purpose flour\n1 1/4 cups white sugar\n2 teaspoons baking soda\n2 teaspoons ground cinnamon\n1/4 teaspoon salt\n2 cups shredded carrots\n1 apple - peeled, cored and shredded\n1/2 cup raisins\n1/2 cup chopped walnuts\n1/2 cup unsweetened flaked coconut\n3 large eggs\n1 cup vegetable oil\n2 teaspoons vanilla extract\n350 degrees F for 20 minutes\nMore information at allrecipes.com",
     "Corn Muffins:\n1 cup cornmeal\n1 cup all-purpose flour\n1/3 cup white sugar\n2 teaspoons baking powder\n1/2 teaspoon salt\n1 egg, beaten\n1/4 cup canola oil\n1 cup milk\n400 degrees F for 15 to 20 minutes\nMore information at allrecipes.com",
     "Blueberry Muffins:\n1 1/2 cups all-purpose flour\n3/4 cup white sugar\n2 teaspoons baking powder\n1/2 teaspoon salt\n1/3 cup vegetable oil\n1 egg\n1/3 cup milk, or more as needed\n1 cup fresh blueberries\n400 degrees for 20 to 25 minutes\nMore information at allrecipes.com"
  ]]
]], // basics
["chocolate chip cookies", 1, [
 ["*", [
     "Chocolate Chip Cookies:\n1 cup packed brown sugar\n2 eggs\n2 teaspoons vanilla extract\n1 teaspoon baking soda\n2 teaspoons hot water\n1/2 teaspoon salt\n3 cups all-purpose flour\n2 cups semisweet chocolate chips\n1 cup chopped walnuts\n350 degrees F for 10 mins\nMore information at allrecipes.com",
  ]]
]],
["peanut butter ", 1, [
 ["*", [
    "Peanut Butter Bup Cookies\n1 3/4 cups all-purpose flour\n1/2 teaspoon salt\n1 teaspoon baking soda\n1/2 cup butter, softened\n1/2 cup white sugar\n1/2 cup peanut butter\n1/2 cup packed brown sugar\n1 egg\n1 teaspoon vanilla extract\n2 tablespoons milk\n40 miniature chocolate covered peanut butter cups, unwrapped\nMore information at allrecipes.com",

  ]]
]],

["ginger cookies", 1, [
 ["*", [
    "Ginger Cookies:\n2 tablespoons white sugar\n2 1/4 cups all-purpose flour\n2 teaspoons ground ginger\n1 teaspoon baking soda\n3/4 teaspoon ground cinnamon\n1/2 teaspoon ground cloves\n1/4 teaspoon salt\n3/4 cup margarine, softened\n1 cup white sugar\n1 large egg\n1/4 cup molasses\n1 tablespoon water\n350 degrees F for 8-10 minutes\nMore information at allrecipes.com"
  ]]
]],
["double chocolate chip cookies", 0, [
 ["*", [
    "Double Chocolate Chip Cookies:\n1 cup margarine, softened\n1 cup white sugar\n1 cup brown sugar\n2 eggs\n1 teaspoon vanilla extract\n2 cups all-purpose flour\n1 teaspoon baking soda\n1 teaspoon salt\n1/3 cup unsweetened cocoa powder\n3 cups semisweet chocolate chips\n375 degrees F for 8-10 minutes\nMore information at allrecipes.com"

  ]]
]],
["carrot cake", 1, [
 ["*", [
    "Carrot cake: \n2 cups white sugar\n1 1/4 cups vegetable oil\n4 eggs\n2 teaspoons vanilla extract\n2 cups all-purpose flour\n2 teaspoons baking soda\n2 teaspoons baking powder\n1/2 teaspoon salt\n3 cups grated carrots\n1 cup chopped pecans\n350 degrees F for 40 minutes\nMore information at allrecipes.com"
  ]]
]],
["blueberry muffins", 1, [
 ["*", [
    "Blueberry Muffins:\n1 1/2 cups all-purpose flour\n3/4 cup white sugar\n2 teaspoons baking powder\n1/2 teaspoon salt\n1/3 cup vegetable oil\n1 egg\n1/3 cup milk, or more as needed\n1 cup fresh blueberries\n400 degrees for 20 to 25 minutes\nMore information at allrecipes.com"

  ]]
]],
["pumpkin pie", 1, [
 ["*", [
    "Pumpkin Pie:\n1 (15 ounce) can pumpkin puree\n1 (14 ounce) can EAGLE BRAND® Sweetened Condensed Milk\n2 large eggs\n1 teaspoon ground cinnamon\n1/2 teaspoon ground ginger\n1/2 teaspoon ground ginger\1/2 teaspoon ground nutmegn\n1/2 teaspoon salt\n1 (9 inch) unbaked pie crust\n425 degrees for 35-40 minutes\nMore information at allrecipes.com",
  ]]
]],
["chocolate cake", 1, [
 ["*", [
    "Back-of-the-Box Hershey's Chocolate Cake:\n2 cups white sugar\n1 3/4 cups all-purpose flour\n3/4 cup unsweetened cocoa powder\n1 1/2 teaspoons baking soda\n1 1/2 teaspoons baking powder\n1 teaspoon salt\n2 large eggs\n1 cup milk\n1/2 cup vegetable oil\n2 teaspoons vanilla extract\n1 cup boiling water\n350 degrees F for 30-35\nMore information at allrecipes.com",

  ]]
]],
["pecan pie", 1, [
 ["*", [
     "Pecan Pie:\n1 3/4 cups white sugar\n1/4 cup dark corn syrup\n1/4 cup butter\n1 tablespoon cold water\n2 teaspoons cornstarch\n3 eggs\n1/4 teaspoon salt\n1 teaspoon vanilla extract\n1 1/4 cups chopped pecans\n1 (9 inch) unbaked pie shell\n 350 degrees for 45 to 50 minutes\nMore information at allrecipes.com",
  ]]
]],
["brownies", 1, [
 ["*", [
     "Chocolate Brownies:\n1/2 cup butter\n1 cup white sugar\n2 eggs\n1 teaspoon vanilla extract\n1/3 cup unsweetened cocoa powder\n1/2 cup all-purpose flour\n1/4 teaspoon salt\n1/4 teaspoon baking powder\n350 degrees F for 25 to 30 minutes\nMore information at allrecipes.com"
  ]]
]]
];

var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];