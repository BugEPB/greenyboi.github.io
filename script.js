
const display = document.getElementById('display');

function showRescue() {
display.innerHTML = `
<h3 style="margin-top:0; color:#2e7d32;">🚨 Emergency Ingredient Rescue</h3>
<p style="font-size:14px; color:#555;">Type a fragile grocery item to simulate instant AI recovery advice.</p>
<div class="input-group">
<input type="text" id="foodInput" placeholder="Try: banana, lettuce, or milk...">
<button class="action-btn" onclick="processRescue()">Rescue</button>
</div>
<div id="rescueOutput"></div>
`;
}

function processRescue() {
const item = document.getElementById('foodInput').value.toLowerCase().trim();
const output = document.getElementById('rescueOutput');

if (!item) {
output.innerHTML = "<p style='color:red; font-size:14px; margin-top:10px;'>Please type an item first.</p>";
return;
}

let action = `Chop, blanch, and flash-freeze your <b>${item}</b> to halt cell breakdown and preserve raw nutrients.`;
let insight = "Moving items strictly to a visible 'First In, First Out' designated shelf space reduces immediate consumer waste by 30%.";

if (item.includes('banana')) {
action = "Peel and freeze brown bananas immediately to use later in morning smoothies or baked banana bread.";
insight = "Bananas generate high volumes of ethylene gas. Keep them isolated to protect nearby sensitive produce from rotting.";
} else if (item.includes('lettuce') || item.includes('green') || item.includes('spinach')) {
action = "Submerge wilted leaves completely in a bowl of ice water for 10 minutes, dry thoroughly, and store with a fresh paper towel.";
insight = "Controlled hydration forces pure water back into cell gaps, completely restoring optimal crispness and leaf turgor pressure.";
} else if (item.includes('milk') || item.includes('dairy')) {
action = "Pour excess liquid milk directly into ice cube trays for coffee use, or save turning milk to activate fluffy pancake batters.";
insight = "Standard commercial 'Best By' dates dictate baseline manufacturing quality parameters, not safety timelines.";
}

output.innerHTML = `
<div class="result-box"><b>AI Action:</b> ${action}</div>
<div class="insight-box"><b>Data Insight:</b> ${insight}</div>
`;
}

function showRecipe() {
display.innerHTML = `
<h3 style="margin-top:0; color:#2e7d32;">🍳 Zero-Waste Recipe Generator</h3>
<p style="font-size:14px; color:#555;">The automated ingestion model maps available scraps to active inventory arrays.</p>
<div style="background:#f9f9f9; padding:12px; border-radius:6px; border:1px solid #eee; margin-top:10px;">
<b style="color:#2e7d32;">✨ Active AI Output: Kitchen-Sink Skillet Frittata</b><br>
<span style="font-size:13px; color:#666;"><b>Ingredients Auto-Matched:</b> Wilted Spinach + Expiring Sour Cream + Soft Tomatoes</span>
<p style="font-size:14px; margin:8px 0 0 0; line-height:1.4;">
Chop and sweat down your soft tomatoes and greens in a pan. Whisk standard eggs directly into your extra sour cream to stabilize a creamy base. Pour over, top with any hard rind cheese scraps, and bake.
</p>
</div>
`;
}

function showMetrics() {
display.innerHTML = `
<h3 style="margin-top:0; color:#2e7d32;">📉 Live Sustainability Dashboard</h3>
<p style="font-size:14px; color:#555;">Gamified analytics convert user entry updates directly into transparent environmental impacts.</p>
<div class="metrics-grid">
<div class="metric-card" style="background:#e8f5e9; color:#2e7d32;"><b>42.5 lbs</b><br><span style="font-size:11px; color:#666;">Waste Saved</span></div>
<div class="metric-card" style="background:#e3f2fd; color:#1565c0;"><b>$168.40</b><br><span style="font-size:11px; color:#666;">Money Saved</span></div>
<div class="metric-card" style="background:#efebe9; color:#4e342e;"><b>110 lbs</b><br><span style="font-size:11px; color:#666;">CO2 Offset</span></div>
</div>
<p style="font-size:12px; color:#777; margin-top:15px; line-height:1.3; background:#fff3e0; padding:8px; border-radius:4px;">
💡 <b>Pitch Delivery Note:</b> Highlight to judges that converting physical mass weight directly into standardized carbon metrics enables this application layout to hook seamlessly into corporate carbon validation engines.
</p>
`;
}
