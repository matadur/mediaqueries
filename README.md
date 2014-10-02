# Media Queries

With this package you can use CSS Media Queries in your Meteor application logic. It will user native matchMedia or use a browser Polyfill if its not avaliable.

For a performance overview and feature of the polyfill look at: https://github.com/weblinc/media-match


##Install

```
meteor add nerdmed:mediaqueries
```


##Register your Queries like in CSS
This will just return a reactive Boolean variable and will be updated on changes.

	mediaqueries.register("(max-width: 800px)"); // your window is 1200px
	> true 

##Use the build in Tempalte Helper
You can register a helper with a name. This name can be used with the Template helper like this:

In your js:

	mediaqueries.register("(max-width: 800px)", "iphone");
	
In your tempalte:

	<div class="{{mediaqueries 'iphone' 'small' 'big' }}">content</div>

If the mediaqueries validates this will return the first parameter:

	<div class="small">content</div>

If not it will return the second:

	<div class="big">content</div>
