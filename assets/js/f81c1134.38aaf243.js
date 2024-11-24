"use strict";(self.webpackChunkscrap_computers_docs=self.webpackChunkscrap_computers_docs||[]).push([[8130],{7735:e=>{e.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"mod-expansion-and-optimization","metadata":{"permalink":"/blog/mod-expansion-and-optimization","source":"@site/blog/2024-11-24-mod-expansion-and-optimization.md","title":"Further Mod Expansion, Fixes and Optimization Update","description":"A smaller precursor update to a larger once coming soon. We felt like these features would be too useful to keep out of the hands of our talanted community, for more information on new functions / renames, please see the code documentation, here is what has changed:","date":"2024-11-24T00:00:00.000Z","tags":[{"inline":false,"label":"Updates","permalink":"/blog/tags/updates","description":"ScrapComputers Updates"},{"inline":false,"label":"Bugfix/Hotfix","permalink":"/blog/tags/bugfix","description":"ScrapComputer fixes"}],"readingTime":2.66,"hasTruncateMarker":true,"authors":[{"name":"Ben Bingo","title":"ScrapComputers Developer","url":"https://github.com/Ben-Bingo","imageURL":"https://avatars.githubusercontent.com/u/99429191?v=4","key":"benBingo","page":null}],"frontMatter":{"slug":"mod-expansion-and-optimization","title":"Further Mod Expansion, Fixes and Optimization Update","authors":["benBingo"],"tags":["updates","bugfix"]},"unlisted":false,"nextItem":{"title":"Better Images & Speaker Bugfix Update","permalink":"/blog/speaker-fix-and-images-added"}},"content":"A smaller precursor update to a larger once coming soon. We felt like these features would be too useful to keep out of the hands of our talanted community, for more information on new functions / renames, please see the code documentation, here is what has changed:\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n---\\r\\n\\r\\n## The New Stuff:\\r\\n\\r\\n### New font manager\\r\\n\\r\\nThe new font manager allows for a wide range of use cases including our new TTF font rendering system, this allows for any TTF font to be imported into ScrapComputers. The new font manager also hosts the ability to do live text scaling, rotation and coloring. Along side this we have a much larger lists of fonts to choose from!\\r\\n\\r\\nHere is an example:\\r\\n\\r\\n![TTF Font Renderer](/img/blogs/ttf-helloworld-example.png \\"Custom TTF font with dynamic scale and rotation\\")\\r\\n\\r\\n### New LED light component\\r\\n\\r\\nA simple component which allows you to control the color of a block sized LED light, useful for those moments where you need some sick computer controller mood lighting.\\r\\n\\r\\n### More Python Tools\\r\\n\\r\\nMore python tools, such as: TTF font conversion, an obj model converter and more!\\r\\n\\r\\n### The New Models\\r\\n\\r\\nVeraDev has been slowly dying in blender once again, he has returned with a new GPS and Laser model, they look very nice!\\r\\n\\r\\nHere they are\\r\\n\\r\\n![New GPS Model Image](/img/blogs/gps-model-example.png \\"New GPS model\\")\\r\\n\\r\\n![New Laser Model Image](/img/blogs/laser-model-example.png \\"New laser model\\")\\r\\n\\r\\n### Bigger Environment\\r\\n\\r\\nBecause of these new modules added, we have made our environment a bit bigger to accomodate everything, we have also decided to unlock sm.json.open from the unsafe environment for more choices when it comes to relying on files stored in blueprints.\\r\\n\\r\\n### New Examples\\r\\n\\r\\nThe PONG! and the whiteboard example have been added so you can see how some of the new modules are implemented.\\r\\n\\r\\nHere is pong in action (with debug mode enabled):\\r\\n\\r\\n![PONG! Example Image](/img/blogs/pong-example.png \\"Pong doing some sick pong things\\")\\r\\n\\r\\n---\\r\\n\\r\\n## Fixes, Imporvements and Optimizations:\\r\\n\\r\\n### Display\\r\\n\\r\\nA lot more display optimization has taken place greatly improving the display over a lot more drawing scenarios especially large clear and redraw scenarios. There has also been some improvements to the touch screen system and culling system, find the new functions in the docs.\\r\\n\\r\\n### GPS\\r\\n\\r\\nAn extra point of data has been added to the GPS called degreeRotation which is a euler representation of the GPS\'s rotation.\\r\\n\\r\\n### Translation manager\\r\\n\\r\\nMissing and mispelled translations have been rectified, and improvements have been made to the Dutch translation.\\r\\n\\r\\n### Syntax manager\\r\\n\\r\\nMore optimisation and color correction has been done to the syntax manager, making the time it takes to format a lot of text very small while making it look as beautiful as VSCode!\\r\\n\\r\\n### LuaVM\\r\\n\\r\\nMore LuaVM optimisation has been done lowering the benchmark time scores by a few miliseconds.\\r\\n\\r\\n### Component Ratings\\r\\n\\r\\nComponents now have the non default ratings for a bit of realism.\\r\\n\\r\\n### Error Messages\\r\\n\\r\\nMore error management has been added incase something goes wrong with our end, also better error formatting.\\r\\n\\r\\n### Mod GUI\'s\\r\\n\\r\\nComponents with a GUI will now play audio when you open it.\\r\\n\\r\\n---\\r\\n\\r\\nThat\'s all for this update! We\u2019re always working on more behind-the-scenes improvements, so stay tuned for what\'s next!"},{"id":"speaker-fix-and-images-added","metadata":{"permalink":"/blog/speaker-fix-and-images-added","source":"@site/blog/2024-10-06-speaker-fix-and-images.md","title":"Better Images & Speaker Bugfix Update","description":"Not a huge update, but still an exciting one! We\'ve fixed a pesky speaker bug, introduced more display optimizations, and perhaps best of all, drastically improved the quality and speed of image rendering.","date":"2024-10-06T00:00:00.000Z","tags":[{"inline":false,"label":"Updates","permalink":"/blog/tags/updates","description":"ScrapComputers Updates"},{"inline":false,"label":"Bugfix/Hotfix","permalink":"/blog/tags/bugfix","description":"ScrapComputer fixes"}],"readingTime":0.97,"hasTruncateMarker":true,"authors":[{"name":"VeraDev","title":"ScrapComputers Owner","url":"https://github.com/VeraDev0","imageURL":"https://avatars.githubusercontent.com/u/159570832?v=4","key":"veradev","page":null}],"frontMatter":{"slug":"speaker-fix-and-images-added","title":"Better Images & Speaker Bugfix Update","authors":["veradev"],"tags":["updates","bugfix"]},"unlisted":false,"prevItem":{"title":"Further Mod Expansion, Fixes and Optimization Update","permalink":"/blog/mod-expansion-and-optimization"},"nextItem":{"title":"Quality of Life Improvement Update","permalink":"/blog/qol-improvement-update"}},"content":"Not a huge update, but still an exciting one! We\'ve fixed a pesky speaker bug, introduced more display optimizations, and perhaps best of all, drastically improved the quality and speed of image rendering.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n## Better Image Support\\r\\n\\r\\nImages are looking much sharper and loading faster than ever. You can now render a **1080p** image in just a couple of seconds! This means better performance and more visually stunning outputs in record time. Whether you\'re working with high-res assets or generating beautiful graphics, the improved rendering speed will make your workflow smoother.\\r\\n\\r\\n## Display Optimization\\r\\n\\r\\nOur resident display wizard, Ben Bingo, has gone all out once again. The guy doesn\u2019t know when to quit! With his latest round of optimizations, display performance has been fine-tuned even further, making everything smoother, crisper, and faster.\\r\\n\\r\\n## Speaker Bugfix\\r\\n\\r\\nThere was a speaker bug which didnt allow you to use the range of the pitch modifier in playNote as the speaker was asserting this value to be an integer and not a number, this has now been fixed.\\r\\n\\r\\n---\\r\\n\\r\\nThat\'s all for this update! We\u2019re always working on more behind-the-scenes improvements, so stay tuned for what\'s next!"},{"id":"qol-improvement-update","metadata":{"permalink":"/blog/qol-improvement-update","source":"@site/blog/2024-10-02-quality-of-life-improvements.md","title":"Quality of Life Improvement Update","description":"This update isn\'t huge, but it improves how you use the mod and fixes some bugs along the way. We\u2019ve also made several optimizations to make things run smoother.","date":"2024-10-02T00:00:00.000Z","tags":[{"inline":false,"label":"Updates","permalink":"/blog/tags/updates","description":"ScrapComputers Updates"},{"inline":false,"label":"Bugfix/Hotfix","permalink":"/blog/tags/bugfix","description":"ScrapComputer fixes"}],"readingTime":2.98,"hasTruncateMarker":true,"authors":[{"name":"VeraDev","title":"ScrapComputers Owner","url":"https://github.com/VeraDev0","imageURL":"https://avatars.githubusercontent.com/u/159570832?v=4","key":"veradev","page":null}],"frontMatter":{"slug":"qol-improvement-update","title":"Quality of Life Improvement Update","authors":["veradev"],"tags":["updates","bugfix"]},"unlisted":false,"prevItem":{"title":"Better Images & Speaker Bugfix Update","permalink":"/blog/speaker-fix-and-images-added"},"nextItem":{"title":"The long awaited ScrapComputers V2.0 update","permalink":"/blog/ScrapComputers-2.0"}},"content":"This update isn\'t huge, but it improves how you use the mod and fixes some bugs along the way. We\u2019ve also made several optimizations to make things run smoother.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n## General Optimizations\\r\\n\\r\\nWe\u2019ve worked on making the mod faster and more efficient. One big change is that we\u2019ve now optimized the **LuaVM** for the first time. These changes may not be obvious right away, but you should notice things running more smoothly, especially when doing more complex tasks.\\r\\n\\r\\n---\\r\\n\\r\\n## LuaVM Optimizations\\r\\n\\r\\nWhile adding image support, we were using **one long string** to handle image data. This caused a lot of slowdown, especially with larger images (like 256x256). The problem was with the LuaVM\u2019s interpreter, **Yueliang**, which wasn\u2019t good at handling long strings.\\r\\n\\r\\nAfter VeraDev optimized it, the difference was huge. Check out the performance graph below:\\r\\n\\r\\n![LuaX String Reading Optimization Graph](/img/blogs/luax-string-reading-optimization-graph.png \\"Graph of the LuaVM reading string\'s in performance.\\")  \\r\\n*Each dot shows a test of reading a 100 KiB string.*\\r\\n\\r\\nAs you can see, this is a **massive improvement**. Now, large data can be stored and processed without slowing down the computer. (At least until Scrap Mechanic corrupts it!)\\r\\n\\r\\n---\\r\\n\\r\\n## Semi-Live Syntax Highlighting\\r\\n\\r\\nWe\u2019ve added **Semi-Live Syntax Highlighting** for the in-game computer. This makes your code much easier to read and understand.\\r\\n\\r\\n![Syntax Highlighting Image](/img/blogs/syntax-highlighting-showcase.png \\"Syntax Highlighting in action\\")\\r\\n\\r\\nIt automatically highlights code as you type, but due to game limitations, it only works when typing at the end of the entire code. You can press a button to manually refresh the highlighting when needed.\\r\\n\\r\\nSyntax highlighting also helps you find errors faster. Look at this example:\\r\\n\\r\\n![Syntax Highlighting Error Image](/img/blogs/syntax-highlighting-showcase-error.png \\"Error detection with syntax highlighting\\")\\r\\n\\r\\nThe line with the error turns **red**, and related functions show up as **dark red**. This makes finding and fixing mistakes much easier!\\r\\n\\r\\n---\\r\\n\\r\\n## Translation Support\\r\\n\\r\\nWe\u2019ve added a **LanguageManager** so you can now add translations to the mod. You can include any language, even those not supported by Scrap Mechanic. However, some fonts might not work if the game doesn\u2019t support them, especially for non-Latin languages.\\r\\n\\r\\nNote: This doesn\u2019t work for inventory descriptions. because those are stored in json, where we cant modify them via Lua.\\r\\n\\r\\n---\\r\\n\\r\\n## Addons Can Now Add Examples\\r\\n\\r\\n*(For addon developers)*\\r\\n\\r\\nWe\u2019ve added an **ExampleManager**, which allows addon developers to include code examples for the computer. This is a simple feature to make it easier for users to learn how to use your addons.\\r\\n\\r\\n---\\r\\n\\r\\n## New Fonts\\r\\n\\r\\nWe\u2019ve added new fonts in this update. Although 4 old fonts were removed, we\u2019ve added 5 new ones. 4 of these come from *Minecraft*, and the last one is a custom font created by **VeraDev**, designed for smaller screens.\\r\\n\\r\\n---\\r\\n\\r\\n## Display Optimization\\r\\n\\r\\nBen Bingo has optimized the display even more. He\u2019s always looking for ways to make things faster, and VeraDev (the writer of this blog) is trying to tell him to stop optimizing as he is going too far.\\r\\n\\r\\n---\\r\\n\\r\\n## Image Generator\\r\\n\\r\\nYou can now convert PNG images to a special format that works with our **Image Renderer Example**. Once converted, you can display these images directly on the computer screen, giving you new ways to add visuals in the game.\\r\\n\\r\\n---\\r\\n\\r\\n## Thats it!\\r\\n\\r\\nThats the entire update, we will warn you tho, the next update will be a **majour** update so expect no updates for the following weeks! If you want to get teased on what the next update would contain, **[Check our discord!](https://discord.gg/6r46PkYr9s)** thats where you can get the latest teasers and talk to the team!"},{"id":"ScrapComputers-2.0","metadata":{"permalink":"/blog/ScrapComputers-2.0","source":"@site/blog/2024-09-15-ScrapComputers-2.0.md","title":"The long awaited ScrapComputers V2.0 update","description":"This is the biggest update we have put together so far, lots of changes, bug fixes and optimizations have happened. We reccomend you see the rest of the documentation to see everything that has changed, I will only name a few of the major things.","date":"2024-09-15T00:00:00.000Z","tags":[{"inline":false,"label":"Updates","permalink":"/blog/tags/updates","description":"ScrapComputers Updates"},{"inline":false,"label":"Bugfix/Hotfix","permalink":"/blog/tags/bugfix","description":"ScrapComputer fixes"}],"readingTime":2.01,"hasTruncateMarker":true,"authors":[{"name":"Ben Bingo","title":"ScrapComputers Developer","url":"https://github.com/Ben-Bingo","imageURL":"https://avatars.githubusercontent.com/u/99429191?v=4","key":"benBingo","page":null}],"frontMatter":{"slug":"ScrapComputers-2.0","title":"The long awaited ScrapComputers V2.0 update","authors":["benBingo"],"tags":["updates","bugfix"]},"unlisted":false,"prevItem":{"title":"Quality of Life Improvement Update","permalink":"/blog/qol-improvement-update"},"nextItem":{"title":"Another display lag bug fixed!","permalink":"/blog/another-display-lag-bug-fixed"}},"content":"This is the biggest update we have put together so far, lots of changes, bug fixes and optimizations have happened. We reccomend you see the rest of the documentation to see everything that has changed, I will only name a few of the major things.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n# General:\\r\\n\\r\\nFor some general points, we have remastered nearly all component models and added some extra designs, we have also fixed a general bug with the data list and components sometimes not existing when they do.\\r\\n\\r\\n# RC Bug:\\r\\n\\r\\n- A working fix has been reimplemented\\r\\n\\r\\n# Global functions:\\r\\n\\r\\n- Added a loadstring function which can also excecute bytecode in the unsafe env.\\r\\n\\r\\n# Display:\\r\\n\\r\\n- New backend system which includes bug fixes and a lot of optimisation.\\r\\n- Added getId, this returns the id of the display.\\r\\n- Added getOptimizationThreshold, this returns the optimization threshold of the display.\\r\\n- Culling speed increase.\\r\\n- Multiplayer fixes with display and touch screen syncing.\\r\\n\\r\\n# Camera:\\r\\n\\r\\n- New display drawing system which includes a lot of function renames, however now you can directly pass the display into the camera funciton, and it will draw it. For people wondering if you can still network images, the answer is yes! All you have to do is send the camera over the network instead.\\r\\n- Heavy optimisation.\\r\\n- Improved image quality with focus on shadows, biome blending and color accuracy.\\r\\n- Added custom functions which allow you to draw frames or video with your own custom drawer.\\r\\n\\r\\n# Laser:\\r\\n\\r\\n- Added a visual laser that can be toggled on and off with toggleLaser.\\r\\n\\r\\n# Computer: \\r\\n\\r\\n- New backend system which includes optimisation.\\r\\n- Added always on feature.\\r\\n- Fixed bug with networking too much code.\\r\\n- Improved error messages.\\r\\n- Modified the examples due to function renames and system changes, also added new ones.\\r\\n\\r\\n# Speaker:\\r\\n\\r\\n- Function renames.\\r\\n- Removed queue system.\\r\\n- Bug fixes with parameters.\\r\\n\\r\\n# Hologram:\\r\\n\\r\\n- Bug fixed with setRotation changing the scale of the effect.\\r\\n\\r\\n# Radar:\\r\\n\\r\\n- Optimization.\\r\\n\\r\\nAgain, there is a lot more to see than listed here, we recommend you have a deep dive in the docs to see everything. Usually bugs come with a large update like this, so dont hesitate to get in contact to report a bug, and we will try our best to fix it in a timley manner. Stay tuned for more updates in the future!"},{"id":"another-display-lag-bug-fixed","metadata":{"permalink":"/blog/another-display-lag-bug-fixed","source":"@site/blog/2024-06-27-another-display-lag-bug-fixed.md","title":"Another display lag bug fixed!","description":"I discovered another display \\"memory leak\\" bug that was causing duplicated effects.","date":"2024-06-27T00:00:00.000Z","tags":[{"inline":false,"label":"Updates","permalink":"/blog/tags/updates","description":"ScrapComputers Updates"},{"inline":false,"label":"Bugfix/Hotfix","permalink":"/blog/tags/bugfix","description":"ScrapComputer fixes"}],"readingTime":0.18,"hasTruncateMarker":true,"authors":[{"name":"VeraDev","title":"ScrapComputers Owner","url":"https://github.com/VeraDev0","imageURL":"https://avatars.githubusercontent.com/u/159570832?v=4","key":"veradev","page":null}],"frontMatter":{"slug":"another-display-lag-bug-fixed","title":"Another display lag bug fixed!","authors":["veradev"],"tags":["updates","bugfix"]},"unlisted":false,"prevItem":{"title":"The long awaited ScrapComputers V2.0 update","permalink":"/blog/ScrapComputers-2.0"},"nextItem":{"title":"Hotfix for Display Lag Issue","permalink":"/blog/hotfix-for-display-lag-issue"}},"content":"I discovered another display \\"memory leak\\" bug that was causing duplicated effects.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nThe issue was due to Display.clear making clones of the backpanel! The bug has been fixed.\\r\\n\\r\\nStay tuned for more updates! (And Hotfixes!)"},{"id":"hotfix-for-display-lag-issue","metadata":{"permalink":"/blog/hotfix-for-display-lag-issue","source":"@site/blog/2024-06-26-hotfix-for-display-lag-issue.md","title":"Hotfix for Display Lag Issue","description":"We\'ve just released a new hotfix to address a display issue that was causing lag over time.","date":"2024-06-26T00:00:00.000Z","tags":[{"inline":false,"label":"Updates","permalink":"/blog/tags/updates","description":"ScrapComputers Updates"},{"inline":false,"label":"Bugfix/Hotfix","permalink":"/blog/tags/bugfix","description":"ScrapComputer fixes"}],"readingTime":0.27,"hasTruncateMarker":true,"authors":[{"name":"VeraDev","title":"ScrapComputers Owner","url":"https://github.com/VeraDev0","imageURL":"https://avatars.githubusercontent.com/u/159570832?v=4","key":"veradev","page":null}],"frontMatter":{"slug":"hotfix-for-display-lag-issue","title":"Hotfix for Display Lag Issue","authors":["veradev"],"tags":["updates","bugfix"]},"unlisted":false,"prevItem":{"title":"Another display lag bug fixed!","permalink":"/blog/another-display-lag-bug-fixed"},"nextItem":{"title":"Bugfix Update: Removing a bugfix to fix a bug!","permalink":"/blog/remove-bugfix-to-fix-bug"}},"content":"We\'ve just released a new hotfix to address a display issue that was causing lag over time.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nAlthough it wasn\u2019t exactly a memory leak, it had a similar impact, leading to decreased performance.\\r\\n\\r\\nThis update doesn\u2019t introduce any new features, but we\u2019re glad to have fixed the bug! Stay tuned for more updates!"},{"id":"remove-bugfix-to-fix-bug","metadata":{"permalink":"/blog/remove-bugfix-to-fix-bug","source":"@site/blog/2024-06-25-remove-bugfix-to-fix-bug.md","title":"Bugfix Update: Removing a bugfix to fix a bug!","description":"We just unimplemented a bugfix as our bugfix. That is not even a joke.","date":"2024-06-25T00:00:00.000Z","tags":[{"inline":false,"label":"Updates","permalink":"/blog/tags/updates","description":"ScrapComputers Updates"},{"inline":false,"label":"Bugfix/Hotfix","permalink":"/blog/tags/bugfix","description":"ScrapComputer fixes"}],"readingTime":2.26,"hasTruncateMarker":true,"authors":[{"name":"VeraDev","title":"ScrapComputers Owner","url":"https://github.com/VeraDev0","imageURL":"https://avatars.githubusercontent.com/u/159570832?v=4","key":"veradev","page":null}],"frontMatter":{"slug":"remove-bugfix-to-fix-bug","title":"Bugfix Update: Removing a bugfix to fix a bug!","authors":["veradev"],"tags":["updates","bugfix"]},"unlisted":false,"prevItem":{"title":"Hotfix for Display Lag Issue","permalink":"/blog/hotfix-for-display-lag-issue"},"nextItem":{"title":"Update: The Addon System Update","permalink":"/blog/update-addon-system"}},"content":"We just unimplemented a bugfix as our bugfix. That is not even a joke.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nYou might be wondering, \\"Did we just undo a bugfix to solve a problem?\\" Yes, that\u2019s precisely what happened! In our latest update for ScrapComputers, we had to remove a previous bugfix and essentially reintroduce a bug to address an even more significant issue. Let\'s dive into the details.\\r\\n\\r\\n# The RC Bug: What\u2019s the Deal?\\r\\n\\r\\nFor those unfamiliar with the RC bug in ScrapComputers, it allows remote control of components even when they have no physical connections. Sounds neat, right? Well, not really. While this might seem like a handy feature, it led to unexpected behavior and caused more harm than good. The original fix aimed to tackle this issue but ended up causing more trouble. So, we had to roll back the fix to restore stability.\\r\\n\\r\\nAn example of the issues caused by the RC bug was that it could \\"brick\\" your computer. Users reported receiving an error message saying, \\"The component cannot be found,\\" even though the component was still connected. This essentially rendered the computer useless because you could no longer interact with that component, which is a significant problem!\\r\\n\\r\\n# What Else Is New?\\r\\n\\r\\nBesides the rollback of the RC bugfix, we\'ve implemented a few other updates and changes to improve your experience with ScrapComputers. Here\'s the full changelog:\\r\\n- Removed RC Bugfix: We had to revert the fix for the RC bug due to its negative impact.\\r\\n- Enhanced Keyboard Functionality in Seats: You can now use the keyboard while sitting in a seat, even though there\'s no icon indicating this feature when you\'re connected to the seat.\\r\\n- Fixed Critical Computer Issue: Previously, the computer wasn\u2019t affected by our ban-system process. This has now been fixed.\\r\\n\\r\\n# What Does This Mean for You?\\r\\n\\r\\nWhile it might sound counterintuitive to reintroduce a bug, this step was necessary to maintain stability and usability. We\u2019re committed to providing you with a seamless experience in ScrapComputers, and sometimes that involves a bit of backtracking to move forward.\\r\\n\\r\\n# Fresh New Bug Discovery!\\r\\n\\r\\nDuring our testing and community feedback, we discovered a new bug. One of our community members, The Red Builder, encountered an issue while working on a project with ScrapComputers. When setting `self.cl` to an empty table in an unsafe environment, it caused significant problems. ScrapComputers uses self.cl for client-side variables, so when he did that, it effectively wiped out his entire computer setup, resulting in errors like `unable to find self.sv`, which is not typical behavior.\\r\\n\\r\\nWe are planning to fix this issue soon. In the meantime, we recommend avoiding setting `self.sv` or `self.cl` in the computer when in an unsafe environment."},{"id":"update-addon-system","metadata":{"permalink":"/blog/update-addon-system","source":"@site/blog/2024-06-22-update-addon-system.md","title":"Update: The Addon System Update","description":"We just made our add-on system a LOT better than before! After 1 issue we encountered, we have done it!","date":"2024-06-22T00:00:00.000Z","tags":[{"inline":false,"label":"Updates","permalink":"/blog/tags/updates","description":"ScrapComputers Updates"}],"readingTime":1.765,"hasTruncateMarker":true,"authors":[{"name":"VeraDev","title":"ScrapComputers Owner","url":"https://github.com/VeraDev0","imageURL":"https://avatars.githubusercontent.com/u/159570832?v=4","key":"veradev","page":null}],"frontMatter":{"slug":"update-addon-system","title":"Update: The Addon System Update","authors":"veradev","tags":["updates"]},"unlisted":false,"prevItem":{"title":"Bugfix Update: Removing a bugfix to fix a bug!","permalink":"/blog/remove-bugfix-to-fix-bug"}},"content":"We just made our add-on system a LOT better than before! After 1 issue we encountered, we have done it!\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nBut first, let\'s dive around a couple of days ago. So, we had an issue where we couldn\'t manage to sync a variable across mods, but when **Ben Bingo** asked that issue in **The Guild of Scrap Mechanic Modders**. Then **June** gave us the solution! One came after the other. Now we have the best Addon System out of all other computer mods.\\r\\n\\r\\nWe also are the 1st ever computer mod to allow the Addon Developers to make configurations with just code! You can make configurations in just two lines, 1 for initializing the config functions and the other for creating them!\\r\\n\\r\\nAfter changing how the structure works in the mod and how things work, You can also modify the environment variables of the Computer API! You can also access the Computer API from Components via the Addon API!\\r\\n\\r\\nYou can also now take a masked frame for cameras via the `getMaskedFrame` function. It would be useful for such as detecting objects. What it does is via a mask parameter, Pixels become white if that raycast\'s result type is the mask (So if the mask is \\"body\\", all white pixels mean that it hit a \\"body\\"). It can also be an array in case you want to detect multiple things.\\r\\n\\r\\nWe also added 2 new modules. **The BitStream Module and the VPBS Module.** The BitStream Module is a Module to read/write to binary via bitstreams! The VPBS module makes converting from **lua tables to binary and vice-versa easier** via the **bitstream module.**\\r\\n\\r\\nThere are also more table functions added to your table\'s tables!\\r\\n\\r\\nWe also **improved the config updater** to be done for every config option. So you don\'t have to reset your configuration when making addons\\r\\n\\r\\nWe also fixed some bugs in the mod! One of the bugs has been solved, but not in the other computer mods.\\r\\n\\r\\nThanks to everyone who supported our mods, the people who gaved us suggestions and found bugs! We see you in the next update!"}]}}')}}]);