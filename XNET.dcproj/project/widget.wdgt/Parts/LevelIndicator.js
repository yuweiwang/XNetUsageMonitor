/*jsl:import DashcodePart.js*/

/* 
 This file was generated by Dashcode and is covered by the 
 license.txt included in the project.  You may edit this file, 
 however it is recommended to first turn off the Dashcode 
 code generator otherwise the changes will be lost.
 */

// Note: Properties and methods beginning with underbar ("_") are considered private and subject to change in future Dashcode releases.


/**   
 *  @declare DC.LevelIndicator
 *  @extends DC.DashcodePart
 *  
 */
DC.LevelIndicator= Class.create(DC.DashcodePart, {

    exposedBindings: ["value","minValue","maxValue","onValue","warningValue","criticalValue","spacing","stacked","interactive"],
                                
    __viewClassName__: "LevelIndicator",
    
    partSetup: function(spec)
    {
            // For JavaScript event handlers
        var _self = this;
        var onchanged = spec.onchange || null;
		try { onchanged = eval(onchanged); } catch (e) { onchanged = null; }

        /* Objects */
        this._levelIndicator = this.viewElement();
        
        /* public properties */
        // These are read-write. Set them as needed.
        this.onchanged = onchanged;
        this.continuous = spec.continuous || false; // Fire onchanged live, as opposed to onmouseup
        
        // These are read-only. Use the setter functions to set them.
        this.value = spec.value || 0;
        
        /* Internal objects */
        this._track = null;
            
        this.imageWidth = spec.imageWidth || 0;
        this.imageHeight = spec.imageHeight || 0;


        this.minValue = spec.minValue || 0;
        this.maxValue = spec.maxValue || 0;
        this.onValue = spec.onValue || 0;
        this.warningValue = spec.warningValue || 0;
        this.criticalValue = spec.criticalValue || 0;
        this.spacing = spec.spacing || 0;
        this.stacked = spec.stacked || false;
        this.interactive = spec.interactive || false;
        
        this._captureEventHandler = function(event) { _self._captureEvent(event); };
        this._mousedownTrackHandler = function(event) { _self._mousedownTrack(event); };
        this._mousemoveTrackHandler = function(event) { _self._mousemoveTrack(event); };
        this._mouseupTrackHandler = function(event) { _self._mouseupTrack(event); };
        this._baseImagesPath = "";
        
        var style = null;
        var element = null;
        
        while (this._levelIndicator.firstChild) {
            this._levelIndicator.removeChild(this._levelIndicator.firstChild);
        }
        
        // Level Indicator Track
        element = document.createElement("div");
        style = element.style;
        style.appleDashboardRegion = "dashboard-region(control rectangle)";
        style.height = "100%";
        style.width = "100%";
        this._levelIndicator.appendChild(element);
        this._track = element;
        
        // Add event listeners
        if (this.interactive)
        {
            this._track.addEventListener("mousedown", this._mousedownTrackHandler, true);
        }
        
        this._fishedLoading = true; 
        this._setBaseImagesPath(spec.baseImagesPath || null);
    },
    
    remove: function()
    {
        var parent = this._track.parentNode;
        parent.removeChild(this._track);
    },
    
    insertedIntoDocument: function()
    {
        var self = this;
        setTimeout(function(){self.refresh()},0);
    },
    

    /*
     * refresh() member function
     * Refresh the current level indicator position.
     * Call this to make the level indicator appear after the widget has loaded and 
     * the LevelIndicator object has been instantiated.
     */
    refresh: function()
    {	
        if (!this._fishedLoading)
            return;
        var styleElement = this._levelIndicator;
        this._computedLevelIndicatorStyle = document.defaultView.getComputedStyle(styleElement, null);
        this._setValueTo(this.value);
        this.needsDisplay = false;
    },
    
    setValue: function(newValue)
    {
        this.value = newValue;
        this.needsDisplay = true;
        this.refresh();
    },
    
    getValue: function()
    {
        return this.value;
    },
    
    setMinValue: function(newValue)
    {
        this.minValue = newValue;
        this.needsDisplay = true;
        this.refresh();
    },
    
    getMinValue: function()
    {
        return this.minValue;
    },
    
    setMaxValue: function(newValue)
    {
        this.maxValue = newValue;
        this.needsDisplay = true;
        this.refresh();
    },
    
    getMaxValue: function()
    {
        return this.maxValue;
    },
    
    setOnValue: function(newValue)
    {
        this.onValue = newValue;
        this.needsDisplay = true;
        this.refresh();
    },
    
    getOnValue: function()
    {
        return this.onValue;
    },
    
    setWarningValue: function(newValue)
    {
        this.warningValue = newValue;
        this.needsDisplay = true;
        this.refresh();
    },
    
    getWarningValue: function()
    {
        return this.warningValue;
    },
    
    setCriticalValue: function(newValue)
    {
        this.criticalValue = newValue;
        this.needsDisplay = true;
        this.refresh();
    },
    
    getCriticalValue: function()
    {
        return this.criticalValue;
    },
    
    setSpacing: function(newValue)
    {
        this.spacing = newValue;
        this.needsDisplay = true;
        this.refresh();
    },
    
    getSpacing: function()
    {
        return this.spacing;
    },
    
    setStacked: function(newValue)
    {
        this.stacked = newValue;
        this.needsDisplay = true;
        this.refresh();
    },
    
    getStacked: function()
    {
        return this.stacked;
    },
    
    setInteractive: function(newValue)
    {
        this.interactive = newValue;

        document.removeEventListener("mousedown", this._mousedownTrackHandler, true);

        if (this.interactive)
        {
            this._track.addEventListener("mousedown", this._mousedownTrackHandler, true);
            this._track.style.appleDashboardRegion = "dashboard-region(control rectangle)";
        }
        else
        {
            this._track.style.appleDashboardRegion = "none";
        }
        
        this.needsDisplay = true;
        this.refresh();
    },
    
    getInteractive: function()
    {
        return this.interactive;
    },

    setImageOff: function(newValue)
    {
        this.imageOffPath = newValue;	
        this.refresh();
    },
    
    setImageOn: function(newValue)
    {
        this.imageOnPath = newValue;	
        this.refresh();
    },
    
    setImageWarning: function(newValue)
    {
        this.imageWarningPath = newValue;	
        this.refresh();
    },
    
    setImageCritical: function(newValue)
    {
        this.imageCriticalPath = newValue;	
        this.refresh();
    },
    
    setImageWidth: function(newValue)
    {
        this.imageWidth = newValue;	
        this.refresh();
    },
    
    setImageHeight: function(newValue)
    {
        this.imageHeight = newValue;	
        this.refresh();
    },
        
    _setBaseImagesPath: function(basePath)
    {
        if (!basePath) {
            basePath = "";
        } else if (basePath.length > 0 && basePath.charAt(basePath.length-1) != "/") {
            basePath += "/";
        }
        
        this._baseImagesPath = basePath;

        this.refresh();
    },

    _setValueTo: function(newValue)
    {	
        this.value = newValue;
        
        // Remove the existing children
        var track = this._track;
        while (track.hasChildNodes())
            track.removeChild(track.firstChild);
        
        this._layoutElements();
        
        if (this.continuous && this.onchanged != null)
            this.onchanged(this.value);
    },

    // Capture events that we don't handle but also don't want getting through
    _captureEvent: function(event)
    {
        event.stopPropagation();
        event.preventDefault();
    },
    
    _mousedownTrack: function(event)
    {	
        // temporary event listeners
        document.addEventListener("mousemove", this._mousemoveTrackHandler, true);
        document.addEventListener("mouseup", this._mouseupTrackHandler, true);
        document.addEventListener("mouseover", this._captureEventHandler, true);
        document.addEventListener("mouseout", this._captureEventHandler, true);
        
        this._setValueTo(this._computeValueFromMouseEvent(event));
    },
    
    _mousemoveTrack: function(event)
    {	
        this._setValueTo(this._computeValueFromMouseEvent(event));
    },
    
    _mouseupTrack: function(event)
    {	
        document.removeEventListener("mousemove", this._mousemoveTrackHandler, true);
        document.removeEventListener("mouseup", this._mouseupTrackHandler, true);
        document.removeEventListener("mouseover", this._captureEventHandler, true);
        document.removeEventListener("mouseout", this._captureEventHandler, true);
        
        // Fire our onchanged event now if they have discontinuous event firing
        if (!this.continuous && this.onchanged != null)
            this.onchanged(this.value);
    } 
});
