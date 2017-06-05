$(document).ready(function(e) {
	$('select.custom_select').each(function() {
    var $this = $(this),
    numberOfOptions = $(this).children('option').length;
    $this.addClass('s-hidden');
    $this.wrap('<div class="select"></div>');
    $this.after('<div class="styledSelect"></div>');
    var $styledSelect = $this.next('div.styledSelect');
    $styledSelect.text($this.children('option').eq(0).text());
    var $list = $('<ul />', {
        'class': 'options'
    }).insertAfter($styledSelect);
    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $this.children('option').eq(i).text(),
            rel: $this.children('option').eq(i).val()
        }).appendTo($list);
    }
    var $listItems = $list.children('li');
    $styledSelect.click(function(e) {
        e.stopPropagation();
        $('div.styledSelect.active').each(function() {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });
    $listItems.click(function(e) {
		e.stopPropagation();
		$styledSelect.text($(this).text()).removeClass('active');
		
		//custom logic to add black color class
		//alert($(this).text());
		if($(this).text() != 'example: #511') { 
			$styledSelect.addClass("black_color");
		}
		else {
			$styledSelect.removeClass("black_color");
		}
		// end of custom logic
		
        $this.val($(this).attr('rel'));
		var abc = $this.val();
		if(abc !=''){
		var unit_value =  '  <span id="green_tag_selected" class="green_tag">'+abc+'</span><span class="green_tick"></span>';
		$(".unit_number").html(unit_value);
        }
		else
		{
			var unit_value =  '';
		$(".unit_number").html(unit_value);
			}
		$list.hide();
    });
    $(document).click(function() {
        $styledSelect.removeClass('active');
        $list.hide();
    });
	});


});