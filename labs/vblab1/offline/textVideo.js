modelfilestrs['textVideo'] = hereDoc(function(){/*!
<script type="text/javascript">

	
	// pageChanged & sizeChanged functions are needed in every model file
	// other functions for model should also be in here to avoid conflicts
	var textVideo = new function() {
		// function called every time the page is viewed after it has initially loaded
		this.pageChanged = function() {
			if (x_currentPageXML.getAttribute("url").substr(0,7) != "<iframe") {
				this.loadVideo();
			}
		}
		
		// function called every time the size of the LO is changed
		this.sizeChanged = function(pageChg) {
			
		}
		
		this.init = function() {
			// text align
			$("#textHolder").html(x_addLineBreaks(x_currentPageXML.childNodes[0].nodeValue));
			var $panel = $("#pageContents .panel");
			
			var textAlign = x_currentPageXML.getAttribute("align"); // Left|Right|Top|Bottom
			if (textAlign == "Top" || textAlign == "Bottom") {
				if (textAlign == "Top") {
					$("#pageContents").prepend($("#textHolder"));
				}
				$("#pageContents .mobileAlign").addClass("centerAlign");
			} else if (textAlign == "Right") {
				$panel.addClass("x_floatLeft");
			} else {
				$panel.addClass("x_floatRight");
			}
			
			// transcript stuff
			var transcriptTxt = x_currentPageXML.getAttribute("transcript");
			if (transcriptTxt != undefined && transcriptTxt != "") {
				$("#transcript")
					.hide()
					.html(x_addLineBreaks(transcriptTxt));
				
				$("#transcriptBtn")
					.button({
						icons:	{secondary:"ui-icon-carat-1-n"},
						label:	(x_currentPageXML.getAttribute("transcriptTabTxt") != undefined ? x_currentPageXML.getAttribute("transcriptTabTxt") : "Transcript")
					})
					.attr("aria-expanded", false)
					.click(function() {
						$this = $(this);
						if ($this.attr("aria-expanded") == "false") {
							$("#transcript").slideDown();
							$this
								.attr("aria-expanded", true)
								.button({icons: {secondary:"ui-icon-carat-1-s"}});
						} else {
							$("#transcript").slideUp();
							$this
								.attr("aria-expanded", false)
								.button({icons: {secondary:"ui-icon-carat-1-n"}});
						}
					});
			} else {
				$("#transcriptHolder").remove();
			}
			
			var $pageVideo = $("#pageVideo"),
				videoSrc = x_currentPageXML.getAttribute("url");
			
			if (videoSrc.substr(0,7) == "<iframe") {
				$("#pageContents .panel").removeClass("panel inline");
				
				$pageVideo.append(videoSrc);
				
				if ($("#transcriptHolder").length > 0) {
					$("#transcript").width($pageVideo.width());
				}
				
			} else {
				var videoDimensions = [320,240];
				
				if (x_currentPageXML.getAttribute("movieSize") != "" && x_currentPageXML.getAttribute("movieSize") != undefined) {
					var dimensions = x_currentPageXML.getAttribute("movieSize").split(",");
					if (dimensions[0] != 0 && dimensions[1] != 0) {
						videoDimensions = dimensions;
					}
				}
				
				$pageVideo.data({
					"src"			:videoSrc,
					"dimensions"	:videoDimensions,
					"startEndFrame"	:[Number(x_currentPageXML.getAttribute("startFrame")), Number(x_currentPageXML.getAttribute("endFrame"))]
				});
				
				this.loadVideo();
				
				//controls toggle
				$(".panel.inline.x_floatRight")
					.mouseover(function(){
						$(".mejs-controls").show();
					})
					.mouseout(function(){
						$(".mejs-controls").hide();
					});
				
				if ($("#transcriptHolder").length > 0) {
					$("#transcript").width(videoDimensions[0]);
				}
			}
			
			x_pageLoaded();
		}
		
		this.loadVideo = function() {
			var $video = $("#pageVideo");
			$video.mediaPlayer({
				type			:"video",
				source			:$video.data("src"),
				width			:Number($video.data("dimensions")[0]),
				height			:Number($video.data("dimensions")[1]),
				startEndFrame	:$video.data("startEndFrame"),
				title			:x_currentPageXML.getAttribute("tip")
			});
		}
	}
	
	textVideo.init();
	
</script>


<div id="pageContents">
	
	<div class="mobileAlign"> <!-- this tag is only used when viewed on mobiles to change layout -->
		<div class="panel inline">
			<div id="pageVideo"></div>
			<div id="transcriptHolder">
				<button id="transcriptBtn"></button>
				<div id="transcript"></div>
			</div>
		</div>
	</div>
	
	<div id="textHolder"></div>
	
</div>

*/});