import React, { Component } from 'react';
import RecentActivity from "./Component/RecentActivity";
import HeaderNoticeBoard from 'components/HeaderNoticeBoard/index';
import ListItem from './Component/ListItem'
import ImageItem from './Component/ImageItem'
import IntlMessages from 'util/IntlMessages';

const data = [

    {
        name: 'Domnic Harris',
        designation: 'Android Developer',
        description: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet"
    },
    {
        name: 'Garry Sobars',
        designation: 'React Developer',
        description: "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable."
    },
    {
        name: 'Stella Johnson',
        designation: 'Designer',
        description: "The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
    }, {
        name: 'John Smith',
        designation: 'BDM',
        description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
    },
    {
        name: 'Alex Dolgove',
        designation: 'Actor',
        description: "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' "
    },
    {
        name: 'Domnic Brown',
        designation: 'Singer',
        description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },
];

const recentActivity = [
    {
        id: 1,
        day: 'Today',
        tasks: [
            {
                id: 10,
                name: 'Mila Alba',
                title: [<span className="jr-link">Mila Alba</span>, ' left a 5 star review on ',
                <span className="jr-link">Albama’s House</span>],
                avatar: 'https://via.placeholder.com/150x150',
            },
            {
                id: 20,
                name: 'Bob Builder',
                title: ['Callback request from ', <span className="jr-link">Bob Builder</span>, ' for the property ',
                    <span className="jr-link">Dimitri House</span>],
                avatar: 'https://via.placeholder.com/150x150',
            },
            {
                id: 30,
                name: 'Tom Moody',
                title: ['Congratulations to ', <span className="jr-link">Tom Moody</span>,
                    ' for joining 10+ club '],
                avatar: ''
            }
        ]
    },
    {
        id: 2,
        day: 'Yesterday',
        tasks: [
            {
                id: 50,
                name: 'Kily Johns',
                title: ['Agent ',
                    <span className="jr-link">Kily Johns</span>, ' has added 7 new photos to the property ',
                    <span className="jr-link">Albama’s House</span>],
                avatar: '',
            },
            {
                id: 60,
                name: 'Tom Moody',
                title: ['Welcome to a new agent ', <span className="jr-link">Tom Moody in the Company</span>],
                avatar: 'https://via.placeholder.com/150x150',
            },
            {
                id: 70,
                name: 'Oliver Shorter',
                title: [<span className="jr-link">Oliver Shorter</span>, ' is looking for an office space in ',
                <span className="jr-link">Colorado, USA</span>],
                avatar: 'https://via.placeholder.com/150x150',
            }
        ]
    }];

const images = [
    {
        image: 'http://jumbo-react.g-axon.com/static/media/desserts.bf7b12e2.jpeg',
        url: 'https://www.google.com',
        publishDate: '2019/07/01',
        expiryDate: '2019/07/10'
    },
    {
        image: 'http://jumbo-react.g-axon.com/static/media/article-post-1.60355775.jpeg',
        url: 'https://www.google.com',
        publishDate: '2019/07/01',
        expiryDate: '2019/07/10'
    },
    {
        image: 'http://jumbo-react.g-axon.com/static/media/article-post.4ac6d461.jpeg',
        url: 'https://www.google.com',
        publishDate: '2019/07/01',
        expiryDate: '2019/07/10'
    }
];


class NoticeBoard extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="app-main-container">
                    <div className="app-header">
                        <HeaderNoticeBoard />
                    </div>
                    <main className="app-main-content-wrapper">
                        <div className="app-main-content">
                            <div className="app-wrapper">
                                <div className="animated slideInUpTiny animation-duration-3">
                                    <div className="row">
                                        <div className="col-md-8 col-sm-7 col-12 animation slideInLeft">
                                            {data.length === 0 ?
                                                <div className="h-100 d-flex align-items-center justify-content-center">
                                                    {'No messages'}
                                                </div>
                                                :
                                                (data.map((data, index) => (
                                                    <ListItem key={index} data={data} styleName="card shadow " />
                                                )))
                                            }

                                            <nav aria-label="Page navigation example">
                                                <ul className="pagination justify-content-center my-3 my-sm-5">
                                                    <li className="page-item disabled">
                                                        <span className="page-link jr-link" tabIndex="-1">Previous</span>
                                                    </li>
                                                    <li className="page-item"><span className="page-link jr-link">1</span></li>
                                                    <li className="page-item"><span className="page-link jr-link">2</span></li>
                                                    <li className="page-item"><span className="page-link jr-link">3</span></li>
                                                    <li className="page-item">
                                                        <span className="page-link jr-link">Next</span>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>

                                        <div className="col-md-4 col-sm-5 col-12 animation slideInRight">
                                            <div className="sidebar">
                                                <div className="card shadow border-0 p-4">
                                                    <RecentActivity shape="rounded" recentList={recentActivity} />
                                                </div>

                                                <div className="card shadow border-0 p-4">
                                                    <ul className="row articles-section list-unstyled">
                                                        {images.map((data, index) => (
                                                            <ImageItem key={index} data={data} />
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        )

    }
};

export default NoticeBoard;

