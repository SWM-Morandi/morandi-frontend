'use client';

interface ProblemInfoType {
  problem_title: string;
  problem_description: string;
  problem_input: string;
  problem_output: string;
  input_sample: Array<string>;
  output_sample: Array<string>;
}

export default function ProblemInfo({
  problemId,
  problemInfo,
}: {
  problemId: any;
  problemInfo: ProblemInfoType;
}) {
  const samples: Array<{ input: string; output: string }> =
    problemInfo.input_sample.map((input, idx) => {
      return { input: input, output: problemInfo.output_sample[idx] };
    });

  return (
    <>
      <div className="flex flex-col w-[40vw] h-[90vh] mr-[1rem] bg-[#2E3642] rounded-2xl overflow-auto">
        <div className="p-[1.5rem]">
          <div className="text-[20px] mb-[1rem]">
            {problemId}번. {problemInfo.problem_title}
          </div>
          <hr className="text-gray-700"></hr>
          <div className="text-[18px] my-[1rem]">문제</div>
          <div className="bg-gray-900 px-[1rem] pt-[1rem] pb-[0.5rem] rounded-xl">
            {problemInfo.problem_description.split('\n').map((line, idx) => {
              return (
                <div
                  dangerouslySetInnerHTML={{ __html: line }}
                  className="pb-[0.5rem]"
                  key={idx}
                ></div>
              );
            })}
          </div>
          <div className="text-[20px] my-[1rem]">입력</div>
          <div className="bg-gray-900 px-[1rem] pt-[1rem] pb-[0.5rem] rounded-xl">
            {problemInfo.problem_input.split('\n').map((line, idx) => {
              return (
                <div
                  dangerouslySetInnerHTML={{ __html: line }}
                  className="pb-[0.5rem]"
                  key={idx + 100}
                ></div>
              );
            })}
          </div>
          <div className="text-[20px] my-[1rem]">출력</div>
          <div className="bg-gray-900 px-[1rem] pt-[1rem] pb-[0.5rem] rounded-xl">
            {problemInfo.problem_output.split('\n').map((line, idx) => {
              return (
                <div
                  dangerouslySetInnerHTML={{ __html: line }}
                  className="pb-[0.5rem]"
                  key={idx + 200}
                ></div>
              );
            })}
          </div>
          <div className="flex flex-col my-[1rem]">
            {samples.map((sample, idx) => (
              <>
                <div
                  className="flex flex-row justify-between w-[100%] mb-[1rem]"
                  key={idx + 300}
                >
                  <div className="w-[48%] h-[100%]">
                    <div className="mb-[1rem]">예제 입력 {idx + 1}</div>
                    <div className="bg-gray-900 w-[100%] p-[1rem] mb-[1rem] rounded-xl">
                      {sample.input.split('\n').map((line, idx) => (
                        <div className="mb-[0.2rem]" key={idx + 400}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-[48%] h-[100%]">
                    <div className="mb-[1rem]">예제 출력 {idx + 1}</div>
                    <div className="bg-gray-900 w-[100%] p-[1rem] mb-[1rem] rounded-xl">
                      {sample.output.split('\n').map((line, idx) => (
                        <div className="mb-[0.2rem]" key={idx + 500}>
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
