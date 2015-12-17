require('./style.scss');
var api = require('../../utils/api');

var Header = React.createClass({
    getDefaultProps: function() {
        return {
            data: {}
        };
    },
    render: function() {
        return (
            <header>
                <h1>{this.props.data.name}</h1>
                <div>导演：{this.props.data.director}</div>
            </header>
        )
    }
});

var Story = React.createClass({
    getDefaultProps: function() {
        return {
            data: ''
        };
    },
    render: function() {
        return (
            <div>{this.props.data}</div>
        )
    }
});

var Poster = React.createClass({
    getDefaultProps: function() {
        return {
            data: []
        };
    },
    render: function() {
        return <div scrollX={true} className="slider">
            {
                this.props.data.map(function(item, index){
                    return <a href='javascript:void(0)' key={index}>
                        <img src={item.display_url}/>
                    </a>
                })
            } 
        </div>
    }
});

var CommentList = React.createClass({
    render: function() {
        return (
            <div className="comment-list">
                {this.props.data.map(function(item, i) {
                    return (
                        <div key={i}>
                            {item}
                        </div>
                    )
                })}
            </div>
        )
    }
});

var CommentForm = React.createClass({
    onClick: function(e) {
        e.preventDefault();
        var comment = this.refs.commentInput.value;
        this.props.onSubmit(comment);
        this.refs.commentInput.value = '';
    },
    render: function() {
        return (
            <div>
                <div className="input-box">
                    <textarea ref="commentInput" rows="6" placeholder="简单说几句"></textarea>
                </div>
                <div className="btn-box">
                    <a href="#" onClick={this.onClick}>提 交</a>   
                </div>
            </div>
        )
    }
});

var CommentBox = React.createClass({
    getInitialState: function() {
        return {
            comments: ['昨天和两个大朋友，一个小朋友，脑抽的选择了观看此片', '是的，我想都根本没有必要去看正片也能知道这个所谓的“全球首部三维版白雪公主”是个神马玩意儿了', '一开始下载这部影片是给小学的妹妹看的，后来我自己也看了一遍，就后悔把这部烂片给妹妹看了']
        };
    },
    addComment: function(comment) {
        var comments = this.state.comments;
        comments.push(comment);
        this.setState({
            comments: comments
        });
    },
    render: function() {
        return (
            <div className="comment">
                评论
                <CommentList data={this.state.comments}/>
                <CommentForm onSubmit={this.addComment}/>
            </div>
        )
    }
});

var Details = React.createClass({
    getInitialState: function() {
        return {
            info: {}
        };
    },
    componentDidMount: function() {
        console.log('id: ' + this.props.id);

        api.get('cgi/movie/info?movieId=1718')
            .then(function(resp) {
                var data = resp.data;
                this.setState({
                    info: data.info
                });
            }.bind(this));
    },
    render: function() {
        console.log(this.state);
        return (
            <div id="Details">
                <Header data={this.state.info}/>
                <Story data={this.state.info.detail}/>
                <Poster data={this.state.info.still_list}/>
                <CommentBox/>
            </div>
        )
    }
});

module.exports = Details;
