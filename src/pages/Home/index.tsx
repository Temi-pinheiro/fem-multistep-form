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
            transition={{ duration: 0.68 }}
            key={currentStepIndex}
            className='h-full'
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
      <Footer />
    </main>
  );
};
