import { AppLanguage } from '@/context/app-context';

type TranslationKeys =
  | 'appName'
  | 'chooseLanguage'
  | 'continue'
  | 'loginTitle'
  | 'emailOrPhone'
  | 'password'
  | 'next'
  | 'forgotPassword'
  | 'chooseRole'
  | 'producteur'
  | 'valorisateur'
  | 'transporteur';

type TranslationTable = Record<AppLanguage, Record<TranslationKeys, string>>;

export const translations: TranslationTable = {
  fr: {
    appName: 'Valorizi',
    chooseLanguage: 'Choisir votre langue',
    continue: 'Continuer',
    loginTitle: 'Se connecter',
    emailOrPhone: 'Email ou numero de mobile',
    password: 'Mot de passe',
    next: 'Suivant',
    forgotPassword: 'Mot de passe oublie ?',
    chooseRole: "Choisir le type d'utilisateur",
    producteur: 'Producteur',
    valorisateur: 'Valorisateur',
    transporteur: 'Transporteur',
  },
  ar: {
    appName: 'Valorizi',
    chooseLanguage: 'اختر اللغة',
    continue: 'متابعة',
    loginTitle: 'تسجيل الدخول',
    emailOrPhone: 'البريد الالكتروني او رقم الهاتف',
    password: 'كلمة المرور',
    next: 'التالي',
    forgotPassword: 'هل نسيت كلمة المرور؟',
    chooseRole: 'اختر نوع المستخدم',
    producteur: 'منتج',
    valorisateur: 'مثمن',
    transporteur: 'ناقل',
  },
};
