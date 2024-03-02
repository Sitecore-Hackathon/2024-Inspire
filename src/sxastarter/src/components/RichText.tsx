import React, { ReactNode, useState } from 'react';
import { Field, useSitecoreContext, RichText } from '@sitecore-jss/sitecore-jss-nextjs';
import axios from 'axios';
interface Fields {
  Text: Field<string>;
}

const OpenAIAPIKey = process.env.NEXT_PUBLIC_CHAT_GPT_KEY;

type ChatGPTProps = [role: string, content: unknown];

type ChatGPTResponse = {
  role: string;
  content: string;
};
export type RichTextProps = {
  params: { [key: string]: string };
  fields: Fields;
};

export const Default = (props: RichTextProps): JSX.Element => {
  const [responseData, setResponseData] = useState<ChatGPTProps>([] as unknown as ChatGPTProps);
  const [showAccept, setShowAccept] = useState<boolean>(false);
  const fetchMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const buttonText = (e.target as HTMLButtonElement).innerText;
    let input = props?.fields?.Text?.value;
    if (typeof document != undefined) {
      input = (document.querySelector('.rte-text >input') &&
        (document.querySelector('.rte-text >input') as HTMLInputElement)?.value) as string;
    }
    if (input == null || input == undefined) {
      input = props?.fields?.Text?.value;
    }
    const finalText = buttonText + ' ' + input;
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: finalText },
        ],
        model: 'gpt-3.5-turbo',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${OpenAIAPIKey}`,
        },
      }
    );

    setResponseData([
      { role: 'assistant', content: response.data.choices[0].message.content },
    ] as unknown as ChatGPTProps);
    setShowAccept(true);
  };
  const responseMessage = (): ReactNode => {
    return responseData?.map((data: ChatGPTResponse) => {
      return data?.content;
    });
  };
  const updateTextValue = () => {
    if (typeof document != undefined) {
      if (document.querySelector('.rte-text .ql-editor')) {
        const updateDOM = document.querySelector('.rte-text .ql-editor');
        if (updateDOM) {
          updateDOM.innerHTML = responseMessage() as string;
        }
      }
    }
    setShowAccept(false);
  };
  const { sitecoreContext } = useSitecoreContext();
  const isEdit = sitecoreContext?.pageEditing;

  return (
    <div>
      <RichText field={props?.fields?.Text} tag="div" className="rte-text" />
      {isEdit && (
        <>
          <button onClick={fetchMessage} className="button">
            Generate
          </button>
          <button onClick={fetchMessage} className="button">
            Rewrite
          </button>
          <button onClick={fetchMessage} className="button">
            Summarize
          </button>
          <button onClick={fetchMessage} className="button">
            Proof Read
          </button>
        </>
      )}
      <div>
        {showAccept && (
          <>
            <div>{responseMessage()}</div>
            {(responseMessage() as string)?.length > 0 && (
              <button onClick={updateTextValue} className="button">
                Accept
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};
