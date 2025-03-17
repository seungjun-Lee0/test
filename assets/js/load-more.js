

var canLoadMore = true;
var loading = false;

$(document).on('click', '.load-more-container a', function(e) {
    e.preventDefault();
    var $this = $(this);
    if (!loading && canLoadMore) {
        loading = true;
        // Display loader
        //$this.addClass('loading');
        jQuery(".loader-outer").show();
        jQuery(".loader-outer").css("display", "inline-flex");

        $.ajax({
            type: 'POST',
            url: loadmore_params.ajaxurl,
            data: {
                'action': 'loadmore',
                'query': loadmore_params.posts,
                'page': loadmore_params.current_page
            },
            success: function(response) {
                //$this.before(response);
                $('.blog-list-category .row').append(response)
                loadmore_params.current_page++;

                if (loadmore_params.current_page == loadmore_params.max_page) {
                    $this.remove(); // If last page, remove the button
                    canLoadMore = false;
                }
                // Hide loader
               // $this.removeClass('loading');
                jQuery(".loader-outer").hide();
                loading = false;
            }
        });
    }
});

