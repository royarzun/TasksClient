import React from 'react';

import moment from 'moment';
import {replace} from 'lodash';

const style = {
    content: {
        fontSize: 13,
        lineHeight: 1.5,
        textShadow: 'rgba(0,0,0,.01) 0 0 1px'
    }
};


const TaskDetails = ({detail}) => {
    let createMarkup = tag => ({__html: tag});
    detail = replace(detail, /\[(.*?)\]/g, (match) => {
        let date = match.substr(1, 19);
        return moment.utc(date).fromNow();
    });

    detail = replace(detail, /date\*(.*?)\*date/g, (match) => {
        let date =  match.replace("date*", "");
        date = date.replace("*date", "");
        return  moment.tz(date, moment.tz.guess()).format("dddd D MMMM, HH:mm a");
    });

    detail = replace(detail, /productList\*(.*?)\*productList/g, (match) => {
        let products_str =  match.replace("productList*", "");
        products_str = products_str.replace("*productList", "");
        products_str = products_str.replace(/&quot;/g, "\"");
        let products = JSON.parse("[" + products_str + "]" );
        let products_html = "<ul>";
        for (let i in products) {
            if (products[i].id.startsWith('C') === false && products[i].id !== ""){
                products_html += "<li><a target='_blank' href='/cm/products/" + products[i].id + "'>" + products[i].name  +" (" + products[i].qty + ")</a></li>";
            } else {
                products_html += `<li>${products[i].name}</li>`;
            }

        }

        products_html += "</ul>";
        return products_html;
    });

    return (
        <div
            onTouchTap={(e) => e.stopPropagation()}
            style={style.content}
            dangerouslySetInnerHTML={createMarkup(detail)} />
    );
};

export default TaskDetails;
