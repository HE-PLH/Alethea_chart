import {customSettings} from "./settings";
export let Methods = {
    getFinalDate: function(initialTime, difference){
        let day;
        switch (customSettings.timeScale.timeDivider) {
            case "D":
                day = new Date(initialTime);
                break;
        }
        return day;
    },
    getObjectCopy: function(obj){
        return JSON.parse(JSON.stringify(obj));
    },
    find: function (array, item) {
        if (array.length > 0) {
            return array.indexOf(item) !== -1;
        }
    },
    getSelectedText: function () {
        if (window.getSelection) {
            return window.getSelection()
        }
    },
    single_split: function (str, s) {
        let lst = "", lst1 = "", c = false;
        for (let i = 0, len = str.length; i < len; i++) {
            if (str[i] === s) {
                c = true;
                continue
            }
            if (!c) {
                lst += str[i];
            } else {
                lst1 += str[i];
            }
        }
        return [lst, lst1];
    },
    isInViewPort: function (el, bound) {
        if (bound){
            let rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 &&
                rect.bottom <= bound.clientHeight&&
                rect.right <= bound.clientWidth;
        }else {
            let rect = el.getBoundingClientRect();
            return rect.top >= 0 && rect.left >= 0 &&
                rect.bottom <= window.innerHeight || document.documentElement.clientHeight &&
                rect.right <= window.innerWidth || document.documentElement.clientWidth;
        }
    },
    /*remove_duplicates: function (arr) {
        return arr.filter((t = {}, a => !(t[a] = a in t)));
    },*/
    inRange: function (num, start, end) {
        return num >= start && num <= end;
    },
    remove: function (array, item) {
        if (Methods.find(array, item)) {
            array.splice(array.indexOf(item), 1);
        }
    },
    removeSpaces: function (string) {
        return string.replace(/\s/g, '');
    },
    trim: function (string) {
        return string.replace(/^\s+|\s+$/g, '');
    },
    apply: function (array, f){
        for (let i = 0, len = array.length; i<len; i++){
            f(array[i]);
        }
    },
    removeNode: function (element) {
        element.parentNode.removeChild(element);
    },
    reverse: function (str, separator, joiner) {
        return str.split(`${separator || " "}`).reverse().join(`${joiner || " "}`)/*.substr(0,str.length-1-(fromRight||0));*/
    },
    presert: function (concernedNode, concerned_parent, nodeAfter) {
        try {
            nodeAfter = concerned_parent.contains(nodeAfter) ? nodeAfter : null;
            concerned_parent.insertBefore(concernedNode, nodeAfter)
        } catch (e) {
            console.log("shit, a parent on a child?")
        }
    },
    changeClassProperty: function (cls, elements, property, newValue, oldValue) {
        document.querySelectorAll(`${cls}`).forEach(function (el) {
            Methods.find(elements, el) ? el.style[`${property}`] = newValue : el.style[`${property}`] = oldValue || el.style[`${property}`];
        })
    },
    toogle: {
        display: function (element) {
            let display = element.style.display;
            display = display === "none" ? "block" : "none";
            element.style.display = display;
        },
        classes: function (element, class1, class2) {
            let cls = element.classList;
            if (cls.contains(`${class1}`)) {
                element.classList.remove(`${class1}`);
                element.classList.add(`${class2}`);
            } else if (cls.contains(`${class2}`)) {
                element.classList.remove(`${class2}`);
                element.classList.add(`${class1}`);
            } else {
                /*element.classList.add(`${class2}`);*/
            }
        }
    },/*
    getIndex : (element)=>{
        let i = 0;
        while ((element = element.previousSibling) !== null){i++}
        return i;
    }*/
    addToIndex: function (array, item, index) {
        array.splice(index, 0, item);
    },
    replace: function (array, old, _new) {
        let index = array.indexOf(old);
        Methods.remove(array, old);
        Methods.addToIndex(array, _new, index);
        return array;
    },/*
    getIndex : (element)=>{
        let i = 0;
        while ((element = element.previousSibling) !== null){i++}
        return i;
    }*/
    getDuplicates(arrays) {
        return arrays.shift().filter(function (v) {
            return arrays.every(function (a) {
                return a.indexOf(v) !== -1;
            })
        });
    }
};