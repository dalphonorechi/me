
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/me/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/me/about",
    "title": "Mediumish Template for Jekyll",
    "body": "This website is built with Jekyll and Mediumish template for Jekyll. It's for demonstration purposes, no real content can be found. Mediumish template for Jekyll is compatible with Github pages, in fact even this demo is created with Github Pages and hosted with Github.  Documentation: Please, read the docs here. Questions or bug reports?: Head over to our Github repository! Buy me a coffeeThank you for your support! Your donation helps me to maintain and improve Mediumish . Buy me a coffee Documentation"
    }, {
    "id": 2,
    "url": "http://localhost:4000/me/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/me/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           5G: The greatest thing to happen to IoT?                              :               You’ve probably heard of IoT (Internet of Things), which is just the connection of devices to the internet. So your smart phone, laptop, coffeemaker, fridge,. . . :                                                                                                                                                                       Dalphon                                27 Dec 2020                                                                                                                  "
    }, {
    "id": 4,
    "url": "http://localhost:4000/me/portfolio",
    "title": "Portfolio",
    "body": ""
    }, {
    "id": 5,
    "url": "http://localhost:4000/me/projects.html",
    "title": "Projects",
    "body": "      Featured:       {% for project in site. projects %}         {% include featuredprojectbox. html %}  {% endfor %}  "
    }, {
    "id": 6,
    "url": "http://localhost:4000/me/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 7,
    "url": "http://localhost:4000/me/5g-greatest-thing-to-iot/",
    "title": "5G: The greatest thing to happen to IoT?",
    "body": "2020/12/27 - You’ve probably heard of IoT (Internet of Things), which is just the connection of devices to the internet. So your smart phone, laptop, coffeemaker, fridge, you name it, anything that connects to the internet substitutes to IoT. What is 5G?: 5G is the fifth generation of cellular technology that comes with loads of benefits to all industries. Using a unified air interface (air interface just a fancy term for the medium used), it boasts of great capacity, higher data rates and denser network coverage overshadowing those of 4G LTE. It began rolling out in the United States in 2018. 5G technology comes with benefits that include digitized logistics, remote healthcare precision agriculture and safer transportation. Let’s look at 5 reasons why 5G is going to benefit IoT. SPEED: Imagine downloading a 2-hour movie in 10 seconds? That’s how fast 5G technology is expected to be. Delivering speeds of 15 – 20 Gbps, it’s estimated to be 10 times faster than 4G LTE. As if that’s no enough it has the potential of being 100 times faster in the future. These increased speeds will facilitate faster communication in IoT devices. Sensors and devices can communicate with cloud platforms thus making the processing of data from them faster and adjustments can be done accordingly. To add, storing of your information, videos and photos included, will be to the cloud and not in memory of device as access to it will be instant. GREATER BANDWIDTH. : It is estimated an average home will have around 100 smarts devices that will need to connection the internet. All this connections would be tasking to a 4G network but 5G brings greater bandwidth with it. Able to create denser networks both indoors and out doors, it enables connection of many more devices. It is estimated that up to a million devices can be connected in one square kilometer for a 5G network. This is a great thing for IoT as it will enable establishment of smart cities and autonomous cars will become a reality. In case of autonomous cars, the unprecedented speeds and connectivity will enable faster communication and data processing. This will happen between the vehicles, networks, infrastructure and even pedestrians. REDUCED LATENCY. : What if you could access your videos and picture stored on the cloud as if they were stored on your phone? 5G promises to come with reduced latency which is virtually zero. This means when your phone makes a request to server the response will be almost instant. This makes it possible for real time communication between devices. This will enable real-time communication of IoT devices thus making it possible to perform remote actions in real time. This is bound to revolutionize the industrial IoT application. The use of sensors will enable operation of machinery in an industrial plan. This will be done remotely as the latency will be no higher than a couple of milliseconds. NETWORK SLICING. 5G brings the possibilities of implementing virtual networks. This means that a physical network can be sliced into portions that can be assigned for dedicated purposes. In the virtual network, subnets are created, providing connectivity that can cater for specified needs. Network slicing is done to increase quality service, reliability and enhanced security. An example is where the traffic system is isolated in a slice, which will enhance its security. This means that, the system won’t be affected if the main mobile network is overloaded. Questions about 5G. : How can you use it?: To use 5G networks you’ll need a 5G enable device that will be connect to the network. Multiple carries have already rolled out the 5G wireless network and there multiple smart phones available that support 5G capabilities. With time, 5G wireless technology and compatible devices will become more common. When will it be available?: The implementation of 5G networks may take a couple of years. The technology is still under research. Also 5G innovations and service demands, means it will be complex to operate and deploy. Factoring in the cost of the technology it will take sometime for carriers to operationalize it at scale. Is it secure?: 5G will enable a massive number of connected devices. These devices create increase the attack surface of cyber threat actors. With vital systems like healthcare systems and self driving cars will be built on top of network this threat is amplified. But with better encryption and thorough research being undertaken, 5G will be more secure than 4G or 3G. Conclusion. : The 5G network will bring about invention of new devices and technologies that will change the way we live and work. Fast speed, greater capacity and connectivity will connect every consumer to a smarter world. There is need for awareness of the security problems the technology will pose. What are your thoughts on 5G? Do you see it benefiting IoT? Leave your responses below. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});