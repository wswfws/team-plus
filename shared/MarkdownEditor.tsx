'use client'
import markdownit from 'markdown-it'
import hljs from 'markdown-it-highlightjs'
import {useState} from "react";

const md = markdownit().use(hljs, {inline: true})

export const MarkdownEditor = () => {
	const [content, setContent] = useState('');
	return (
		<div className={'MarkdownEditor flex flex-row gap-5 justify-center w-full'}>
			<textarea className='w-[500px] p-5 bg-background-secondary rounded-xl'
								onChange={(e) => setContent(e.target.value)}/>
			<div className='w-[600px] p-5 pl-10 bg-background-secondary rounded-xl'
					 dangerouslySetInnerHTML={{__html: md.render(content)}}/>
		</div>
	);
};