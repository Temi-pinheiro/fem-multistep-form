import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { Step1, Step2, Step3, Step4, Step5 } from '../../steps';
import { useMultistepForm } from '../../hooks/useMultiStepForm';
import { Footer, Panes } from '../../components';
import { useForm } from '../../hooks/useForm';

export const HomePage = () => {
  const [formData, setFormData] = useState({
    monthly: true,
    email: '',
    name: '',
    phone: '',
    plan: 'arcade',
  });
  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevFormData: any) => ({
      ...prevFormData,
      [name]: value,
    }));
    setErrors({ ...errors, [name]: '' });
  };
  const goTo = () => setStep(1);

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
    <Step4 data={formData} changeFunction={goTo} />,
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
    <main className='bg-[#EFF5FF] grid w-screen h-screen md:place-items-center md:px-6 lg:px-0'>
      <div className='flex flex-col md:flex-row items-start md:gap-x-10 lg:gap-x-[100px] rounded-[15px] md:p-4 bg-[#EFF5FF] md:bg-white shadow w-full h-full max-w-[940px] md:max-h-[600px]'>
        <aside className='h-[206px] pt-8 md:h-full bg-[#483EFF] md:rounded-[10px] w-full md:w-[274px] md:block md:py-10 md:px-4 lg:px-8 md:overflow-clip relative'>
          <Panes
            active={currentStepIndex.toString()}
            handleChange={setStep}
            panes={panes}
          />
          <img
            className='hidden md:inline object-cover inset-0 h-full w-full absolute'
            src='bg-sidebar-desktop.svg'
          />
          <img
            className='inline md:hidden object-cover inset-0 h-full w-full absolute'
            src='bg-sidebar-mobile.svg'
          />
        </aside>
        <form
          className='flex flex-col w-full md:max-w-[450px]  md:pt-10 md:pb-4 h-full'
          onSubmit={submit}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.68 }}
            key={currentStepIndex}
            className='md:h-full md:w-full w-[91.4%] mx-auto md:mx-0 bg-white rounded-[10px] md:rounded-none px-6 py-8 md:p-0 -mt-[73px] md:-mt-0 z-10'
          >
            {step}
          </motion.div>

          {isLastStep ? null : (
            <div
              className='mt-auto bg-white md:bg-inherit p-4 md:p-0 flex items-center w-full '
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
      <Footer />
    </main>
  );
};
