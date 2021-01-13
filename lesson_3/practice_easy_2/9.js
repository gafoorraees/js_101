/* If we have a 40-character wide table of FLintstone family members,
how can we center the following title above the table with spaces? */

let title = "Flinstone Family Members";

let padding = Math.floor((40 - title.length) / 2);

title.padStart(padding + title.length);
