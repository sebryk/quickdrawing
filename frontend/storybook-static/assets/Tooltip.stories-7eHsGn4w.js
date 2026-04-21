import{j as e}from"./jsx-runtime-D_zvdyIk.js";const _="_tooltip_184f4_1",f="_tooltip__content_184f4_6",a={tooltip:_,tooltip__content:f},r=({content:t,disabled:u=!1,children:n})=>!t||u?e.jsx(e.Fragment,{children:n}):e.jsxs("span",{className:a.tooltip,role:"tooltip",children:[n,e.jsx("span",{className:a.tooltip__content,children:t})]});r.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{content:{required:!1,tsType:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const g={title:"UI/Tooltip",component:r,tags:["autodocs"],args:{content:"Tooltip content",disabled:!1}},o={render:t=>e.jsx(r,{...t,children:e.jsx("span",{style:{padding:"6px 10px",border:"1px solid #ccc"},children:"Hover me"})})},s={args:{disabled:!0},render:o.render};var l,p,i;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: ComponentProps<typeof Tooltip>) => <Tooltip {...args}>
         <span style={{
      padding: '6px 10px',
      border: '1px solid #ccc'
    }}>Hover me</span>
      </Tooltip>
}`,...(i=(p=o.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var d,c,m;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: Default.render
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const T=["Default","Disabled"];export{o as Default,s as Disabled,T as __namedExportsOrder,g as default};
