import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { IMaskInput } from "react-imask";
import { useState } from "react";
import Link from "next/link";
import { toast } from 'react-toastify';
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
const schema = z.object({
  name: z
    .string()
    .min(1, 'Обязательное поле')
    .min(2, "Введите корректное имя"),
    phone: z
    .string({
      required_error: "Обязательное поле", // Если поле пустое при сабмите
    })
    .min(1, 'Обязательное поле') // Проверка на минимальную длину
    .refine((val) => /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/.test(val), {
      message: "Введите корректный номер телефона",
    }),
  comment: z.string().optional(),
});

type FormData = z.infer<typeof schema>;
export const RequestDialogForm = ({setClose, commentPaste}: {setClose: () => void, commentPaste?: string}) => {
  
  const [loading, setLoading] = useState<boolean>(false)
  const [commentForRent, setCommentForRent] = useState<string>(commentPaste || '')
  const [submit, setSubmit] = useState(false)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  });
  const notify = () => toast.success("Заявка отправлена", {
    style: {
      color: "#ec9f23",
      fontSize: "18px"
    },
    icon: <CheckCircle color="#ec9f23" size={30} />,
    progressClassName: "bg-[#ec9f23]",
    
  });  
  const onSubmit = async (data: FormData) => {
    setLoading(true)
    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      setClose()
      if (result.success) {
        console.log('Письмо отправлено!');
        notify()
      } else {
        console.error('Ошибка при отправке:', result.error);
      }
    } catch (err) {
      console.error('Ошибка при соединении:', err);
    }
  };
  const handlePhoneChange = (value: string) => {
    setValue("phone", value);
    if(submit) trigger("phone");
  };
  
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-[15px] md:px-4">
      <div>
        <Input {...register("name")} className="flex border" placeholder="Ваше имя"/>
        {errors.name && <p className="text-red-500 mt-1 text-[14px]">{errors.name.message}</p>}
      </div>
    
      <div>
        <IMaskInput
          className="md:text-[16px] selection:bg-[#ec9f23] selection:text-white dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring ring-[#ec9f23] focus:border-[#ec9f23] focus-visible:ring-ring/50 focus-visible:ring-[1px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
          mask="+7 (000) 000-00-00"
          lazy={false} // всегда показывает маску
          overwrite
          placeholder="+7 (___) ___-__-__"
          onAccept={handlePhoneChange}
        />
        {errors.phone && (
          <p className="text-red-500 mt-1 text-[14px]">{errors.phone.message}</p>
        )}
      </div>
    
      <div className="max-w-full mb-6 ">
        <Textarea value={commentForRent} onChangeCapture={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCommentForRent(e.target.value)} placeholder="Комментарий..." rows={3} {...register("comment")} className="box-border md:text-[16px] border px-3" />
      </div>
      <div className="flex flex-col space-y-2">
        <Button onClick={() => {
          setSubmit(true);
          }} 
          type="submit" 
          className={cn("flex w-full bg-[#ec9f23] outline-none cursor-pointer hover:bg-[#eba83c] px-7 py-6 text-white text-xl font-semibold", loading && 'loading')}>
            {!loading ? 'Отправить заявку' : ''}
        </Button>
        <p className="md:px-7  text-center font-normal text-[#637288] text-sm">Нажимая на кнопку, вы принимаете <Link href="/privacy" onClick={() => setClose()} className="text-[#ec9f23] hover:cursor-pointer underline-offset-2 hover:underline">Положение</Link> и <Link href='/agreement' onClick = {() => setClose()} className="text-[#ec9f23] hover:cursor-pointer underline-offset-2 hover:underline">Согласие</Link> на обработку персональных данных</p>
      </div>
      
    </form>
  );
}