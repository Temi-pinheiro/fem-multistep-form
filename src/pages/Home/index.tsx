import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Step1, Step2, Step3, Step4, Step5 } from '../../steps';
import { useMultistepForm } from '../../hooks/useMultiStepForm';
import { Panes } from '../../components';
import { useForm } from '../../hooks/useForm';

export const HomePage = () => {
  const [formData, setFormData] = useState({
    period: 'monthly',
    email: '',
    name: '',
    phone: '',
  });
  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: '' });
  };
  const {
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    setStep,
  } = useMultistepForm([
    <Step1 data={formData} update={updateFormData} />,
    <Step2 data={formData} update={updateFormData} />,
    <Step3 data={formData} update={updateFormData} />,
    <Step4 data={formData} update={updateFormData} />,
    <Step5 />,
  ]);
  const { submit, errors, setErrors } = useForm<typeof formData>({
    submitFunction: next,
    data: formData,
  });

  const panes = [
    { id: '0', title: 'STEP 1', desc: 'YOUR INFO' },
    { id: '1', title: 'STEP 2', desc: 'SELECT PLAN' },
    { id: '2', title: 'STEP 3', desc: 'ADD-ONS' },
    { id: '3', title: 'STEP 4', desc: 'SUMMARY' },
  ];
  return (
    <main className='bg-[#EFF5FF] grid w-screen h-screen place-items-center'>
      <div className='flex items-start gap-x-[100px] rounded-[15px] p-4 bg-white shadow w-full h-full max-w-[940px] max-h-[600px]'>
        <aside className='md:h-full bg-[#483EFF] rounded-[10px] w-[274px] py-10 px-8 overflow-clip relative'>
          <Panes
            active={currentStepIndex.toString()}
            handleChange={setStep}
            panes={panes}
          />
          <img
            className='object-cover inset-0 h-full w-full absolute'
            src='../../src/assets/images/bg-sidebar-desktop.svg'
          />
        </aside>
        <form
          className='flex flex-col w-full pr-[100px] pt-10 pb-4 h-full'
          onSubmit={submit}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.3 }}
            key={currentStepIndex}
          >
            {step}
          </motion.div>

          {isLastStep ? null : (
            <div
              className='mt-auto flex items-center w-full '
              aria-label='buttons place'
            >
              <AnimatePresence>
                {isFirstStep ? null : (
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    type='button'
                    onClick={back}
                    className='text-[#9699AA] font-medium transition duration-200 ease-in-out hover:text-[#022959]'
                  >
                    Go back
                  </motion.button>
                )}
              </AnimatePresence>

              <button className='text-white bg-[#022959] px-6 py-[15px] font-medium transition duration-200 ease-in-out hover:bg-[#164A8A] rounded-lg ml-auto'>
                {isLastStep ? 'Confirm' : 'Continue'}
              </button>
            </div>
          )}
        </form>
      </div>
      <footer className='hidden absolute w-full py-4 md:flex flex-col items-center bottom-2'>
        <span className='text-sm text-blue-950 inline-flex gap-x-1 '>
          {' '}
          View on{' '}
          <a
            className='underline underline-offset-4 flex items-center gap-x-1 group'
            href='https://github.com/Temi-pinheiro/fem-multistep-form'
            target='blank'
          >
            Github{' '}
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className='group-hover:animate-bounce transition'
            >
              <path
                d='M10.0008 1.66666C5.39665 1.66666 1.66748 5.39583 1.66748 10C1.66748 13.6875 4.0529 16.8021 7.3654 17.9062C7.78206 17.9792 7.93831 17.7292 7.93831 17.5104C7.93831 17.3125 7.9279 16.6562 7.9279 15.9583C5.83415 16.3437 5.29248 15.4479 5.12581 14.9792C5.03206 14.7396 4.62581 14 4.27165 13.8021C3.97998 13.6458 3.56331 13.2604 4.26123 13.25C4.91748 13.2396 5.38623 13.8542 5.54248 14.1042C6.29248 15.3646 7.4904 15.0104 7.96956 14.7917C8.04248 14.25 8.26123 13.8854 8.50083 13.6771C6.64665 13.4687 4.70915 12.75 4.70915 9.5625C4.70915 8.65625 5.03206 7.90625 5.56331 7.32291C5.47998 7.11458 5.18831 6.26041 5.64665 5.11458C5.64665 5.11458 6.34456 4.89583 7.93831 5.96875C8.605 5.78125 9.31333 5.6875 10.0217 5.6875C10.73 5.6875 11.4383 5.78125 12.105 5.96875C13.6987 4.88541 14.3967 5.11458 14.3967 5.11458C14.855 6.26041 14.5633 7.11458 14.48 7.32291C15.0112 7.90625 15.3342 8.64583 15.3342 9.5625C15.3342 12.7604 13.3862 13.4687 11.5321 13.6771C11.8342 13.9375 12.0946 14.4375 12.0946 15.2187C12.0946 16.3333 12.0842 17.2292 12.0842 17.5104C12.0842 17.7292 12.2404 17.9896 12.6571 17.9062C16.0492 16.7611 18.3332 13.5802 18.3342 10C18.3342 5.39583 14.605 1.66666 10.0008 1.66666Z'
                className='fill-blue-900'
              />
            </svg>
          </a>
        </span>
      </footer>
    </main>
  );
};
