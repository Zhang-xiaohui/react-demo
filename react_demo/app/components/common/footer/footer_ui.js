import React, {Component} from 'react'

// 无状态组件
export default function(props) {
	let element = props.login ? <div>已登录</div> : <div>未登录</div>

		return (
			<div>
				<div>{element}</div>

				<div className="footer-box">
					<div className="footer-link">
						<a href="javascript:;">起点中文网</a> 
						<a href="javascript:;">起点中文网</a> 
						<a href="javascript:;">创世纪中文网</a> 
						<a href="javascript:;">云起书院</a> 
						<a href="javascript:;">榕树下</a> 
						<a href="javascript:;">红袖添香中文网</a> 
						<a href="javascript:;">小说阅读网</a> 
						<a href="javascript:;">言情小说吧</a> 
						<a href="javascript:;">潇湘书院</a> 
						<a href="javascript:;">懒人听书</a> 
						<a href="javascript:;">QQ阅读</a> 
						<a href="javascript:;">起点读书</a> 
						<a href="javascript:;">作家助手</a> 
					</div>
					<div className="footer-menu">
						<a href="javascript:;">关于我们</a> 
						<a href="javascript:;">联系我们</a> 
						<a href="javascript:;">帮助中心</a> 
						<a href="javascript:;">动漫频套</a> 
						<a href="javascript:;">作家专区</a> 
					</div>

					<div>
						<p><span>Copyright &copy; 1999-2017 www.hongxiu.com All Rights Reserved</span>版权所有 北京红袖添香科技发展有限公司</p>
						<p>北京红袖添香科技发展有限公司 京ICP证090200号京ICP备09093681号-1京网文[2015]0006-006号新出网证（京）字204号</p>
						<p>请所有作者发布作品时务必遵守国家互联网信息管理办法规定，我们拒绝任何色情小说，一经发现，即作删除！客服电话：010-59357051</p>
						<p>联系方式 总机 010-62111358 地址：中国（北京）海淀区学院路30号科大天工大厦A座21层01室</p>
						<p>本站所收录作品、社区话题、书库评论及本站所做之广告均属个人行为，与本站立场无关</p>
					</div>

				</div>
			</div>
		)
}