hstApp.config(function ($translateProvider) {
  // TODO - Read and set the preferred language at the App startup
  $translateProvider.preferredLanguage("en");

  $translateProvider.useSanitizeValueStrategy("sanitizeParameters");

  $translateProvider
    .translations("en", {
      TITLE: "HST",
      REQUIRED_DETAILS: "Please fill required details",
      PASSWORD_DOES_NOT_MATCH:
        "Retyped password does not match with the new password",
      CANCEL: "CANCEL",
      HELLO: "Hello",
      BACK: "Back",
      CHANGE: "Change",
      LOGIN: "Login",
      LOGIN_CAPS: "LOGIN",
      REGISTER: "Register",
      REGISTER_CAPS: "REGISTRATION",
      REGISTRATION: "Registration",
      BALANCE_BILL: "Upload Balance Bill",
      USERNAME: "Username",
      PASSWORD: "Password",
      CONFIRM: "Confirmation",
      FORGOT_USERNAME: "Forgot Username",
      FORGOT_PASSWORD: "Forgot Password",
      NO_ACCCOUNT: "DON'T HAVE AN ACCOUNT? SIGN UP HERE",
      OK: "Ok",
      LOADING_DELETE_FILE: "Deleting File . .",
      ERROR: "Invalid Input",
      NOT_EMPTY_MSG: "Username and password must not be empty",
      INVALID_USER: "Invalid Username and Password",
      NO_CONN_ERR_TITLE: "Network Error",
      NO_CONN_ERR: "Network Connecton Error, Please check your Internet",
      MESSAGETEXT: "Write a message. .",
      CANCEL: "CANCEL",
      NEXT: "NEXT",
      SUBMIT: "SUBMIT",
      STEP: "Step",
      SELECT_PROCEDURE: "Select a Procedure",
      OR_SELECT: "Or Select",
      SELECT: "SELECT",
      SELECT_BODY: "Please Select Body Part",
      BODY_PART: "Body Part",
      MESSAGE_FINAL:
        "Your balance bill inquiry has been successfully sent to the Patent Advocacy Center. Your concern will be addressed within 2 business days.",
      MESSAGE_FUNALLINK:
        "For additional information about the Balance Bill process, you can watch a short video here",
      MESSAGE_FINAL4:
        "Your inquiry has been successfully sent to our support center. Your concern will be addressed within 2 business days.",
      MESSAGE_FINAL2: "",
      MESSAGE_FINAL3: "BACK TO MAIN",
      MESSAGE_ERROR_SEND:
        "Please attach all the pages of your balance bill as Patient Advocacy Center needs them to review your case.",
      MESSAGE_NOTE:
        "This message will be sent to our Advocacy Center. We will get back to you as soon as possible.",
      NOTE: "Note:",
      MESSAGE_ATTACH1:
        "Here is where you will attach a copy of your balance bill. You can either take a photo or select a photo you have already taken.",
      MESSAGE_ATTACH2: "Attach File",
      MESSAGE_ATTACH3: "Please upload files.",
      MESSAGE_FILE: "Files:",
      MESSAGE_BILL1: "Please follow the step:",
      MESSAGE_BILL2: "Attach all pages of the balance bill.",
      MESSAGE_BILL3: "Review the attachment.",
      MESSAGE_BILL4: "Write your message.",
      MESSAGE_BILL5: "Click Send.",
      MESSAGE_BILL6: "Please write your message.",
      MESSAGE_BILL7: "Optional, you can attach an email.",
      MESSAGE_BILL8: "Review the message and attachments.",
      MESSAGES_HELP: "How can we help you?",
      MESSAGES_BODY:
        "You are important to us and it is important to us to address your concern. Your message will be sent directly to our Patient Advocate Center.",
      MESSAGES_BILL: "Submit your balance bill.",
      MESSAGES_CONCERN: "Send us a general message.",
      MESSAGES_HISTORY: "View all message history.",
      MESSAGES_STARTED: "Get Started",
      TERMS_USE: `<b>HSTECHNOLOGY SOLUTIONS, INC. HST CONNECT APPLICATION
TERMS AND CONDITIONS OF USE</b>

Updated November 2017

<b>PLEASE READ THESE TERMS AND CONDITIONS OF USE CAREFULLY BEFORE USING OUR MOBILE DEVICE APPLICATION AND RELATED WEBSITE.</b>

HSTechnology Solutions, Inc. (???<b>HST</b>???, ???<b>we</b>???, ???<b>us</b>???, or ???<b>our</b>???), provides you with the HST Connect mobile device application (the ???<b>App</b>???) and related website (including the mobile-optimized versions of such website, the ???<b>Website</b>???) under these Terms and Conditions (this ???<b>Agreement</b>???). If you are a resident of the United States, you are contracting with HSTechnology Solutions, Inc. a Delaware corporation with its principal offices in Irvine, California. The App and the Website are referred to together as the ???<b>Application</b>???. As used in this Agreement, ???<b>you</b>??? or ???<b>users</b>??? refers to individuals using the Application. Any identifiable health information that you supply when using the Application will be used by HST in accordance with its Privacy Policy (please visit our website ???www.hstechnology.com???).

By using the Application and/or by clicking the ???I Agree??? button, you unconditionally agree to follow and be bound by this Agreement. If you do not agree to be bound by and comply with all of the terms of this Agreement, you may not use our Application.

<b>Intended Users</b>

The Application is available only to users who are at least 18 years old. Under no circumstances should the Application be used by children under 14 years of age, and we will not knowingly collect Personal Information from any person we know to be in this age group. If you are using the Application for the benefit of a child, please do not provide information relating to such child unless you have obtained the child???s parents??? or guardians??? consent, including their consent to our Privacy Policy. If you discover that your child has been using the Application without your consent, or that someone has been using the Application for or on behalf of your child without your consent, please contact us using the information below under ???How to Contact Us,??? and we will take reasonable steps to delete the child???s information from our active databases. You may not provide access to or use the Application or Content (as defined below) thereof for the benefit of third parties or make commercial use of the Application or related Content, but you may use the Application for your personal use subject to this Agreement. Use of and access to the Application is void where prohibited. By accessing and using the Application, you represent and warrant that: (a) any and all registration information you submit is truthful and accurate; (b) you will maintain the accuracy of such information; (c) your use of the Application will comply with and does not violate any applicable law, regulation, order or guideline and (d) you consent to receiving messages and promotional material offering in-Application purchases.

<b>Modifications of this Agreement</b>

We reserve the right to update or modify this Agreement, at any time and for any reason, without penalty or liability to you or any third party. By continuing to use the Application after any such changes, you unconditionally agree to follow and be bound by this Agreement as changed. For these reasons, we encourage you to periodically review this Agreement.

<b>Disclaimers</b>

Your use of any aspect of the Application is at your own risk. You must consult with healthcare providers and make your medical decisions based on their advice. We cannot and do not accept any liability with respect to any activities that you may undertake through using the Application.
If you use and/or access the Application on or from an Android device which you or someone else rooted, or on or from an iOS device which you or someone else jail broke, HST shall not be responsible for the security of your data, including your Personal Information, and you shall bear all responsibility for any breach, illegal access, loss and/or corruption of such data.

HST MAKES NO REPRESENTATIONS OR WARRANTIES WHATSOEVER WITH RESPECT TO THE APPLICATION. INFORMATION REGARDING MEDICATIONS, HEALTH, MEDICAL ADVICE, AND OTHERWISE MAY BE PROVIDED BY THIRD PARTIES, INCLUDING OTHER USERS OF THE APPLICATION.  HST IS NOT LIABILE FOR ANY CONTENT WHICH IS PROVIDED BY THIRD PARTIES AND/OR ANY OTHER USERS OF THE APPLICATION. ANY ACTIONS YOU TAKE BASED ON CONTENT, NOTIFICATIONS, AND OTHERWISE PROVIDED BY THE APPLICATION ARE TAKEN AT YOUR SOLE RISK AND WE WILL NOT ACCEPT ANY LIABILITY IN RESPECT THEREOF. YOU SHOULD ALWAYS CHECK ANY INFORMATION PROVIDED THROUGH THE APPLICATION TO ENSURE ITS ACCURACY. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, THE APPLICATION IS PROVIDED ON AN ???AS IS??? AND ???AS AVAILABLE??? BASIS. WE MAKE NO REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, AS TO THE OPERATION OF THE APPLICATION OR ANY INFORMATION, CONTENT, MATERIALS OR PRODUCTS INCLUDED OR REFERENCED THEREIN. TO THE FULL EXTENT PERMISSIBLE BY APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, NON-INFRINGEMENT OF THIRD PARTIES??? RIGHTS AND FITNESS FOR A PARTICULAR PURPOSE. YOU ACKNOWLEDGE THAT YOUR USE OF THE APPLICATION IS AT YOUR SOLE RISK. WE DISCLAIM ANY IMPLIED OR STATUTORY WARRANTIES: (I) REGARDING THE SECURITY, ACCURACY, RELIABILITY, TIMELINESS, AND/OR PERFORMANCE OF THE APPLICATION; OR (II) THAT THE APPLICATION WILL BE ERROR-FREE OR THAT ANY ERRORS WILL BE CORRECTED; OR (III) REGARDING THE PERFORMANCE OF OR ACCURACY, QUALITY, CURRENCY, COMPLETENESS OR USEFULNESS OF ANY INFORMATION PROVIDED BY THE APPLICATION. WE DO NOT WARRANT THAT ANY DESCRIPTION PROVIDED THROUGH THE APPLICATION REGARDING MEDICATIONS OR OTHERWISE IS ACCURATE, COMPLETE, RELIABLE, CURRENT, SAFE, OR ERROR-FREE. NO COMMUNICATION, INFORMATION OR ADVICE GIVEN BY US OR ANY REPRESENTATIVE OF OURS, WHETHER WRITTEN OR ORAL, SHALL CREATE ANY WARRANTY. IF YOU CHOOSE TO RELY ON SUCH INFORMATION, YOU DO SO SOLELY AT YOUR OWN RISK. THIS DISCLAIMER CONSTITUTES AN ESSENTIAL PART OF THIS AGREEMENT.

HEALTH INFORMATION MUST BE INTEGRATED BY HEALTHCARE PROVIDERS INTO THE GENERAL CLINICAL RECORD FOR INDIVIDUALS UNDER THEIR SUPERVISION AND CORRELATED WITH OTHER CLINICAL DATA AS REQUIRED BY PROFESSIONAL STANDARDS IN PROVIDER???S DISCIPLINE. USE OF DATA ACCESSED BY MEANS OF THE APPLICATION, AS WELL AS TREATMENT DECISIONS BASED ON SUCH INFORMATION ARE THE SOLE RESPONSIBILITY OF THE HEALTHCARE PROVIDER AND HST ASSUMES NO LIABILITY WITH RESPECT THERETO.

<b>Requirements for Use</b>

In order to use the App or the Website, you must have compatible computing and mobile devices, access to the Internet and mobile messaging and data services, and certain necessary software. Fees and charges may apply to your use of the Internet or mobile services, and you may be required to purchase hardware or software to enable your devices to access the Application. You agree that you are responsible for meeting these requirements and for your use of the Internet, any associated fees, charges, or expenses.

<b>Application is a Tool</b>

The Application is intended as a healthcare management tool for users. You should not and must not rely on the Application as your primary tool for managing your healthcare information. As further described under ???Technology; Support??? below, the Application might not function as intended. Specifically, the Application will not function properly if your device is broken or powered off, if the Application software is not enabled, or if any hardware or software on your device prevents the Application from operating as intended. The maintenance of your mobile and computing devices is your responsibility. You acknowledge that the Application, and the utility of any of its alerts or notifications, depends on information that you input into the Application. Persons using the Application assume full responsibility for the use of the Application and agree that we are not responsible or liable for any claim, loss, or damage arising from the use of the Application.

<b>No Medical Advice</b>

Information, advice, recommendations, messages, comments, posts, text, graphics, software, photographs, videos, data, and other materials is made available from us or third parties, including other users, through the Application (collectively ???Content???). HST does not guarantee and is not responsible for the accuracy, completeness, or timeliness of any Content.

All Content is provided for informational purposes only. No Content, including that provided by other users of the Application, is or should be considered, or used as a substitute for, medical advice, care, diagnosis, or treatment. The Application does not constitute the practice of any medical, nursing or other professional health care advice, diagnosis or treatment. Reliance on any Content or other information provided by us, our employees, our users or third parties through your use of the Application is solely at your own risk and we accept no liability therefor.

Always seek the advice of your physician or other qualified healthcare provider with any questions you may have regarding your personal health. Never disregard, avoid or delay in obtaining medical advice from your doctor or other qualified healthcare provider because of any information you have received or obtained through the use of the Application. If you have or suspect that you have a medical problem or condition, please contact a qualified health care professional immediately. If you are experiencing a medical emergency, please immediately call for emergency medical help.

<b>Third-Party Websites and Materials</b>

References or links within the Application to any third parties or their websites or information are provided only for your convenience and do not in any way mean that we endorse, sponsor or recommend any third-party material, product or service. We do not make any representations regarding the content, accuracy, completeness, decency, legality, non-infringement, quality or any other aspect of material on such third-party websites or with respect to any content, data, information, applications or materials. We are not responsible for and do not assume any liability with respect to the content, privacy practices, or otherwise of third parties.

<b>Accounts</b>

You may register to use the Application by providing your name and e-mail address and other information requested in the registration form. We may change the method of registration at our discretion. We might refuse to allow any user to open an account for any reason at our sole discretion. You agree to supply accurate and complete information to us when creating your account and when using the Application, as well as to update such information promptly after any change. You will be responsible for any inaccuracies in the information you provide to us, or for your failure to keep such information up-to-date.

Do not share your account or login information with any third party, nor let any third party access your account. You are fully and solely responsible for maintaining the confidentiality of the login information for your account and for the security of your computer system, mobile device and all activity on your account, even if such activities were not committed by you. We may terminate your account if you let someone use your account inappropriately or if you or anyone using your account violates this Agreement. Further, we may restrict access to your account if, after a specified number of attempts, invalid login information is supplied.  You agree to immediately notify us of any unauthorized use of your account. We will not be liable for any losses or damage arising from unauthorized use of the Application, and you agree to indemnify and hold us harmless for any improper or illegal use of the Application, and any charges and taxes incurred, unless you have notified us via e-mail at support@hstechnology.com.

<b>Termination of Account</b>

We may for any reason, in our sole discretion and without notifying you, terminate your account. Grounds for such termination may include (i) extended periods of inactivity, (ii) violation of the letter or spirit of this Agreement, (iii) fraudulent, harassing or abusive behavior or (iv) behavior that is harmful to other users, third parties, and the community ethos of our Application or our business interests. In the event that we terminate your account, you may not register for the Application again without our express permission. If you believe that any action has been taken against your account in error, please contact us at support@hstechnology.com.
In addition, if we believe, in our sole discretion, that a violation of this Agreement or any illegal or inappropriate behavior has occurred, we may take any other corrective action we consider appropriate. We will investigate suspected violations of this Agreement or illegal and inappropriate behavior through the Application. Please note that we will fully cooperate with any law enforcement investigation or court order ordering us or directing us to disclose the identity, behavior or activities of anyone believed to have violated this Agreement or to have engaged in illegal behavior.
You may request termination of your account at any time and for any reason by sending an e-mail to support@hstechnology.com. Any suspension or termination of your account shall not affect your obligations to us under this Agreement (including but not limited to ownership, indemnification, any representations and warranties made by you, and limitation of liability), including all those obligations, which by their sense and context are intended to survive the suspension or termination of your account.

<b>Technology; Support</b>

We do not warrant or guarantee that the Application will function with your mobile or computing device or be compatible with the hardware or software on any particular devices. Information will be transmitted over a medium that will be beyond our control and jurisdiction; multiple factors, including network availability, may affect alert or notification delivery or otherwise interfere with the operation of the Application. We do not warrant or guarantee against, and therefore assume no liability for or relating to, any errors, omissions, delays, failures, interruptions, or corruption or loss of any data, alerts, notifications or other information transmitted in connection with your use of the Application, particularly relating to any failure of the reminder system to function as expected, including but not limited to the non-delivery of any alerts or notifications.

Without limiting the foregoing, we, our licensors, and our suppliers make no representations or warranties about (1) the availability, accuracy, reliability, completeness, quality, performance, suitability or timeliness of the Application, Content, including software, text, graphics, links, or communications provided on or through the use of the Application; or (2) the satisfaction of any government regulations requiring the approval or compliance of any software tools with regard to the Application.

We have no obligation to provide technical support or maintenance for the Application. At any time and for any reason, without notice or liability, we may modify or discontinue the Application or any part of it or impose limits on your use of or access to the Application.

Although we take reasonable measures to keep the Application free of viruses, worms, Trojan horses or other code that contain destructive properties, we do not warrant or guarantee that files available for downloading through the Application will be free of such contaminations.

<b>User???s Responsibilities</b>

If you submit any information to us through or related to the Application or send us any business information, feedback, idea, concept or invention to us by e-mail, you represent and warrant to us that such information is not confidential and that you have all necessary permission to submit or otherwise make available such information. In addition, you grant us a royalty-free, perpetual, irrevocable, world-wide non-exclusive license to use, reproduce, create derivative works from, modify, publish, edit, translate, distribute, perform, and display the communication or content in any media or medium, or any form, format, or forum now known or hereafter developed, including the right to sublicense through multiple tiers of sublicenses.

You further agree that:
???	you will not reproduce, duplicate, copy, sell, resell, or exploit the Application, its Content, its software or any portion of any of the foregoing;
???	you will not use the Application for any purpose in violation of local, state, national or international laws;
???	you will not solicit another person???s password or personal information under false pretenses;
???	you will not impersonate another person or entity or otherwise misrepresent your affiliation with a person or entity, and/or use or access another user???s account or password without permission;
???	you will not violate the legal rights of others, including defaming, abuse, stalking or threatening users;
???	you will not infringe the intellectual property rights, privacy rights, or moral rights of any third party;
???	you will not post or transmit any Content that is (or you reasonably believe or should reasonably believe to be) illegal, fraudulent, or unauthorized, or furthers such activity, or that involves (or you reasonably believe or should reasonably believe to involve) any stolen, illegal, counterfeit, fraudulent, pirated, or unauthorized material;
???	you will not publish falsehoods or misrepresentations, including with respect to any medical or health information; and
???	you will not post or transmit any Content that is (or reasonably should be understood to be) libelous, defamatory, obscene, offensive (including material promoting or glorifying hate, violence, or bigotry or otherwise inappropriate to the community ethos of the Application).

You agree not to interfere or attempt to interfere with the proper working of the Application or to disrupt the operations or violate the security of the Application. Violations of system or network operation or security may result in civil and/or criminal liability. We will investigate possible occurrences of such violations, and we may involve and cooperate with law enforcement authorities in prosecuting anyone involved with such violations. You agree to comply with all user responsibilities and obligations as stated in this Agreement. Non-enforcement or our failure to act with respect to a breach by you or others of this Agreement does not constitute consent or waiver, and we reserve the right to enforce such term at our sole discretion. No waiver of any breach or default hereunder shall be deemed to be a waiver of any preceding or subsequent breach or default. Nothing contained in this Agreement shall be construed to limit the actions or remedies available to us with respect to any prohibited activity or conduct.

<b>License Grant</b>

We hereby grant to you a limited, non-exclusive, non-assignable, non-sublicensable license to access and use our Application, and any user guides, specifications or related documentation (the ???Documentation???), subject to the terms and conditions of this Agreement. This license is only for your personal and non-commercial use and only for the term of this Agreement. To the extent not limited or restricted under any applicable law or regulation, you are granted permission to temporarily download one copy of the App for personal, non-commercial use only on each mobile device that you own or control. You may not distribute or make the App available for use by others on multiple devices simultaneously. Under this license, except as and only to the extent any of the following restrictions are prohibited by applicable law or any of the restricted activities are permitted by the licensing terms of any open-sourced components incorporated into the App, you may not:

???	lend, rent, lease, sell, redistribute, assign, sublicense or otherwise transfer the App or the right to download or use the App;
???	use the Application for any commercial purpose or for any commercial or non-commercial public display;
???	copy, decompile, reverse engineer, disassemble, attempt to derive the source code of the App, any App updates, or any part of the App or updates, or attempt to do any of the foregoing;
???	copy, modify or create derivative works of the Application, Documentation any Application or Documentation updates or any part of the Application, Documentation or updates;
???	remove any copyright or other proprietary notices from the App, Documentation, part of the App or from the Website;
???	transfer the Content or materials from the App or Website to anyone else or ???mirror??? the same on any server;
???	circumvent, disable, or otherwise interfere with security-related features of the Application or features that prevent or restrict use or copying of any content;
???	use any robot, spider, site search or retrieval application, or any other manual or automatic device or process to retrieve, index, data-mine, or in any way reproduce or circumvent the navigational structure or presentation of the Application;
???	harvest, collect or mine information about other users of the Application;
???	post or transmit any virus, worm Trojan horse or other harmful or disruptive element; or
???	violate any applicable law, rule or regulation.

If you violate any of these restrictions, this license will automatically terminate, and you may be subject to prosecution and damages.

<b>Ownership</b>

HST and its licensors own the Website, Documentation and Application, including any material or Content made available through the Application, including our proprietary algorithm, and all worldwide intellectual property rights in the foregoing. Except as expressly permitted herein, you may not copy, further develop, reproduce, republish, modify, alter download, post, broadcast, transmit or otherwise use any material made available in the Application. You will not remove, alter or conceal any copyright, trademark, service mark or other proprietary rights notices incorporated in the Application. All trademarks are trademarks or registered trademarks of their respective owners. Nothing in this Agreement grants you any right to use any trademark, service mark, logo, or trade name of ours or any third party.

<b>Apple, Inc.</b>

This provision only applies with respect to the version of the App used on devices of Apple, Inc. This Agreement is an agreement between you and us. Apple has no responsibility for the App or the content of the App, including  claims of intellectual property infringement, product liability or that the App does not conform with applicable law. To the maximum extent permitted by applicable law, Apple provides no warranty with respect to the App and has no obligation to provide support with respect to the App. All claims with respect to the App must be directed to us and not to Apple. Your use of the App must be in compliance with the App Store Terms of Service, and you may only use the App on a device of Apple, Inc. that you own or control as permitted by such terms. In the event the App fails to conform to the warranty set forth herein, you may notify Apple, and Apple will refund the purchase price for the App to you. Apple shall be a third-party beneficiary of this Agreement with the right to enforce this Agreement against you.

<b>Infringement</b>

Under the Digital Millennium Copyright Act of 1998 (the ???DMCA???), it is our policy to respond to copyright owners who believe material appearing on the Application infringes their rights under US copyright law. We accept no responsibility or liability for any material provided or posted by a user. If you believe that something appearing on the Application infringes your copyright, you may send us a notice requesting that it be removed, or access to it blocked. If you believe that such a notice has been wrongly filed against you, the DMCA lets you send us a counter-notice. All notices and counter-notices must meet the DMCA???s requirements. We suggest that you consult your legal advisor before filing a notice or counter-notice. Be aware that there can be substantial penalties for false claims. It is our policy to terminate the accounts of repeat infringers in appropriate circumstances. Send notices and counter-notices to support@hstechnology.com.

<b>Limitations on Liability</b>

TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, UNDER NO CIRCUMSTANCES AND UNDER NO LEGAL OR EQUITABLE THEORY, WHETHER IN TORT, CONTRACT, STRICT LIABILITY OR OTHERWISE, SHALL WE, OUR AFFILIATES, OR ANY OF OUR OR THEIR EMPLOYEES, DIRECTORS, OFFICERS, AGENTS, VENDORS, OR SUPPLIERS BE LIABLE TO YOU OR TO ANY THIRD PARTY FOR ANY PERSONAL INJURY, INCLUDING DEATH, OR FOR ANY INDIRECT, SPECIAL, INCIDENTAL OR CONSEQUENTIAL LOSSES OR DAMAGES OF ANY NATURE ARISING OUT OF OR IN CONNECTION WITH THE USE OF OR INABILITY TO USE THE APPLICATION, INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOST PROFITS, LOSS OF GOODWILL, LOSS OF DATA, WORK STOPPAGE, ACCURACY OF RESULTS, OR COMPUTER OR DEVICE FAILURE OR MALFUNCTION, EVEN IF A REPRESENTATIVE OF OURS HAS BEEN ADVISED OF OR SHOULD HAVE KNOWN OF THE POSSIBILITY OF SUCH DAMAGES. In addition to the foregoing, we assume no responsibility for any error, omission, interruption, deletion, defect, delay in operation or transmission or communications line failure. We are not responsible for any problems or technical malfunction of any telephone or cellular phone network or lines, computer online systems, servers or providers, computer equipment, software, failure of any e-mail due to technical problems or traffic congestion on the Internet or on the Website, including any injury or damage to users or to any person???s mobile device or computer related to or resulting from participation or use of the Application. Some jurisdictions do not allow the exclusion of certain warranties or the limitation or exclusion of liability for certain damages. Accordingly, some of the above limitations and disclaimers may not apply to you. To the extent that we may not, as a matter of applicable law, disclaim any implied warranty or limit liabilities, the scope and duration of such warranty and the extent of our liability will be the minimum permitted under such applicable law.

Any claims arising in connection with your use of the Application must be brought within one (1) year of the date of the event giving rise to such action occurred. Remedies under this Agreement are exclusive and are limited to those expressly provided for in this Agreement, even if the applicable remedy under this Agreement fails of its essential purpose.

<b>Indemnity</b>

You agree to defend, indemnify, and hold HST harmless including its officers, directors, employees, agents, subcontractors, licensors and suppliers, any of our affiliated companies or organizations, and any successors, assigns or licensees, from and against any claims, actions or demands, damages, losses, liabilities, judgments, settlements, costs or expenses (including attorneys??? fees and costs) arising directly or indirectly from or relating to a) the breach of this Agreement by you or anyone using your computer, mobile device, password or login information; (b) any claim, loss or damage experienced from your use or attempted use of (or inability to use) the Application; (c) your violation of any law or regulation; or (d) any other matter for which you are responsible under this Agreement or under law. You agree that your use of the Application shall be in compliance with all applicable laws, regulations and guidelines.

<b>Termination</b>

This Agreement is effective until terminated by either you or us. You may terminate this Agreement at any time, provided that you discontinue any further use of the Application. If you violate this Agreement, our permission to you to use the Application automatically terminates. We may, in our sole discretion, terminate this Agreement and your access to any or all of the Application, at any time and for any reason, without penalty or liability to you or any third party. In the event of your breach of this Agreement, these actions are in addition to and not in lieu or limitation of any other right or remedy that may be available to us. Upon any termination of the Agreement by either you or us, you must promptly uninstall the App on all of your devices and destroy all materials downloaded or otherwise obtained from the Application, all Documentation, and all copies of such materials and Documentation. The following provisions survive the expiration or termination of this Agreement for any reason whatsoever: Disclaimers, Ownership, Limitations on Liability, Indemnity, Choice of Law and Forum, Entire Agreement and Severability.

<b>Choice of Law and Forum</b>

This Agreement shall be governed in all respects under the laws of the State of California, exclusive of its choice of law or conflict of laws provisions. In any claim or action by you directly or indirectly arising under this Agreement or related to the Application, you irrevocably agree to submit to the exclusive jurisdiction of the courts located in Orange County, California. You waive any jurisdictional, venue, or inconvenient forum objections to any of these courts that may have jurisdiction.

<b>Entire Agreement</b>

This Agreement constitutes the entire agreement between you pertaining to the subject matter hereof. Anything contained in or delivered through the Application that is inconsistent with or conflicts with the terms of this Agreement is superseded by the terms of this Agreement. This Agreement may not be modified, in whole or in part, except as described elsewhere in this Agreement.

<b>Severability</b>

If any of the provisions of this Agreement are held to be not enforceable by a court or other tribunal of competent jurisdiction, then such provisions shall be amended, limited or eliminated to the minimum extent necessary so that this Agreement shall otherwise remain in full force and effect

<b>Assignability</b>

You agree that this Agreement and all incorporated agreements between you and us may only be assigned by us, in our sole discretion to any third party.

<b>Contact Information</b>

All notices to you relating to this Agreement shall be posted on the Application or sent to you at the e-mail or physical address, if any, that you provided to us.  All notices to us relating to this Agreement shall be in writing and sent to the following:

HSTechnology Solutions, Inc.
23382 Mill Creek Drive Suite 200
Laguna Hills, CA 92653

support@hstechnology.com.

Notice shall be deemed given when notice is posted on the Application or when the e-mail is sent, unless the sending party is notified that the e-mail address is invalid. Unless the regular mail is returned to the sender, notice shall be deemed given three days after the regular mail is sent, in the case of domestic mail, or seven days after the regular mail is sent, in the case of international mail.

Last updated: November 2017`,

      VERIFY_IDENTITY: "Verify Identity",
      MEMBERID: "Member ID",
      GROUPID: "Group ID",
      FIRSTNAME: "First Name",
      LASTNAME: "Last Name",
      BIRTH_DATE: "Birth Date",
      LOADING_SEND_MESSAGE: "Sending message ..",
      UNAME_AND_PASSWD: "Username and Password",
      CREATE_PASSWORD: "Create Password",
      CONFIRM_PASSWORD: "Confirm Password",
      SECURITY_QUESTION: "Security Question",
      EMAIL_ADDRESS: "Email Address",
      CANNOT_CONTAIN_SPACE: "Cannot contain spaces.",
      PASS_SPEC: "Must contain 1 uppercase,1 lowercase and 1 number.",
      QUESTION: "Question",
      ANSWER: "Answer",
      ERROR_SECURITY: "Answers doesn't match",
      SUCCESS_RESET_PWD: "Password changed successfully",
      ERROR_RESET_PWD: "Unable to change Password",
      SET_NEW_PWD: "Set New Password",
      MESSAGE_SEND_SUCCES: "Message Send.",
      ADD_ATTACHMENT: "Add Attachment",
      AGREE_TO_CONTINUE: "Agree to continue",
      LOADING_MESSAGE_DELETE: "Deleting message..",
      REVIEW_INFO: "Review Your Information",
      PERSONAL: "Personal",
      CONFIRM_OPEN_LINK:
        "This link is trying to open a web page on your web browser. Do you wish to continue?",

      REQ_FIELD: "required field",

      en: "English",
      es: "Espa??ol",
      sv: "Svenska",

      OPENING_SCREEN_FOOTER_EMERGENCY: "For Emergency Care",
      OPENING_SCREEN_FOOTER_CALL:
        "Call 911 or go directly to the closest emergency room",
      RESET_PASSWORD: "Reset Password",
      SUCCESS: "Success",
      LANGUAGE: "Language",
      WRITE_MESSAGE: "Write message",
      YOUR_USERNAME: "Your username",
      OK: "Ok",
      SET_NEW_PWD: "Set New Password",
      ENTER_NEW_PWD: "Enter a new password",
      STRICT_MUST_6_CHAR: "Must be at least 6 characters",
      MUST_6_CHAR:
        "Must be at least 6 characters: at least 1 uppercase, 1 lowercase and 1 number",
      MUST_1_CHAR: "Must contain 1 uppercase, 1 lowercase and 1 number",
      RETYPE_NEW_PWD: "Retype a new password",
      SUCCESS: "Success",
      SUCCESS_RESET_PWD: "Password changed successfully",
      EMERGENCY_CARE_CALL:
        "For emergency Care: Call 911 or go directly to the closest emergency room",
      WELCOME: "Welcome",
      SEND_US_MESSAGE: "Send Us a Message",
      MESSAGES: "Messages",
      PRESCRIPTION_DRUG_PRICING: "Prescription Drug Pricing",
      YOUR_DOCTOR: "Your Doctor",
      PRICE_A_PROCEDURE: "Price a Procedure",
      FIND_A_PROVIDER: "Find a Provider",
      MY_BENEFITS: "My Benefits",
      CALL_INSURANCE: "Call Plan",
      CHANGE_PASSWORD: "Change Password",
      UPDATE_MEMBER_INFO: "Update Member Info",
      VIEW_TERMS_USE: "View Terms of Use",
      SIGNOUT: "Signout",
      SAVE: "Save",
      PROVIDER_CONTACT_INFO: "Provider Contact Information",
      NAME: "Name",
      EMAIL: "Email",
      OFFICEHOURS: "Office Hours",
      WAITTIME: "Wait Time",
      LICENSE: "License",
      HOSPITALACREDITATION: "Hospital Accreditation",
      AcceptsNewPatients: "Accepts New Patients",
      BoardCertification: "Board Certification",
      DateofLastUpdate: "Date of Last Update",
      ECPFacility: "ECP Facility	",
      ECPPractitioner: "ECP Practitioner",
      LanguagesSpoken: "Languages Spoken",
      LanguagesSpokenStaff: "Languages Spoken Staff",
      ProceduresPerformed: "Procedures Performed	",
      PHONE_NO: "Phone No",
      PHONE_NUMBER: "Phone Number",
      PHONE: "Phone",
      ADDRESS: "Address",
      ADDRESS_1: "Address 1",
      ADDRESS_2: "Address 2",
      DIRECTIONS_TO_PROVIDER: "Directions to Provider",
      OFFICE_HOURS: "Office Hours",
      OTHERS_NOTES: "Other Notes",
      NOTE_PLAN: "Notes",
      PROCEDURE: "Procedure",
      PLEASE_SELECT: "Select...",
      WITHIN: "Within",
      TYPE: "Select type...",
      SUBTYPE: "Select subtype...",
      SERVICE: "Select service...",
      MY_CURRENT_LOCATION: "My Current Location",
      INPUT_LOCATION: "City & State or Zip",
      FIND_ON_MAP: "Find on Map",
      PROVIDER_DONOT_PARTICIPATE_TITLE: "Please Read Before You Proceed.",
      PROVIDER_DONOT_PARTICIPATE:
        "Choosing providers that don't participate in your plan's network may incur higher costs or denied claims.",
      PROVIDER_DONOT_PARTICIPATE2: `We work hard to ensure our data is accurate, but provider information changes frequently. Also, finding
		a provider on this site is not a guarantee of benefits coverage. Before you receive care, you should
		contact:`,
      PROVIDER_DONOT_PARTICIPATE3: `??? The provider to verify new patient status, location and network participation.`,
      PROVIDER_DONOT_PARTICIPATE4: `??? Your health plan to verify your benefits.`,
      SEARCH: "Search",
      STATESPECIFICDIS: "State specific disclaimers",
      SEARCH_RESULT: "Search Result",
      MAP_RESULTS: "Map Results",
      REFINE_RESULTS: "Refine results",
      FILTER: "Filter",
      PROVIDER_LOCATION: "Provider Location",
      DIRECTION_TO_HERE: "Direction to here",
      FILTER_BY: "Filter by",
      PRICE: "Price",
      QUALITY: "Quality",
      ANY: "Any",
      APPLY_FILTER: "Apply Filter",
      CLEAR_FILTER: "Clear Filter",
      SORT_BY: "Sort by",
      DISTANCE: "Distance",
      QUALITY_RATING: "Quality Rating",
      PRICE_RATING: "Price Rating",
      NAME: "Name",
      PRICE_RANGE: "Price Range",
      ESTIMATED_CHARGE_RANGE: "Estimated Charge Range",
      MILES: "miles",
      MILES_2: "mile(s)",
      PATIENTS_TREATED: "Patients Treated",
      YOUR_ESTIMATED_COST: "Estimated Charge",
      DETAILS: "Details",
      GENERAL: "General",
      AVERAGE_LENGTH_OF_STAY: "Average Length of Stay",
      DAYS: "Days",
      AVERAGE_COST_AT_THIS_FACILITY: "Your Estimated Cost at this Facility",
      TOTAL_OUT_OF_POCKET_COSTS: "Estimated Out of Pocket Costs",
      CO_PAY: "Copay",
      IF_NOT_MET_YET: "(if not met yet)",
      CO_INSURANCE: "Coinsurance",
      YOUR_ESTIMATED_SHARE_OF_COSTS: "(estimated share of costs)",
      YOUR_COST: "Estimated Cost",
      CALL_NOW: "Call now",
      ESTIMATED_PLAN_PAYMENT: "Estimated Plan Payment",
      YOUR_OUT_OF_POSCKET_COST_RANGE: "Your out of pocket cost range",
      VBP_ACCEPTANCE: "VDHP Acceptance Rate",
      HCBB_PROCEDURE_RATING: "HCBB Procedure Rating",
      HCBB_QUALITY_RATING: "HCBB Quality Rating",
      GET_DIRECTION: "Get Direction",
      GET_DIRECTIONS: "Directions to Here",
      NO_PROVIDERS_FOUND: "No Providers Found",
      FIND_A_DOCTOR: "Find a Doctor",
      FIND_HOSPITAL: "Find a Hospital",
      FIND_PROCEDURE: "Find a Procedure",
      FIND_BY_NAME: "Find by Name",
      SPECIALIZATION: "Specialization",
      VIEW_MAP: "View map",
      SET_PCP: "Set as primary care physician",
      PCP_SET_SUCCESS: "PCP set successfully",
      NOT_AVAILABLE: "Not Available",
      BENEFITS: "Benefits",
      MY_PLAN_INFO: "Plan Details",
      MY_PLAN_INFO_DETAIL: "Plan Details",
      MY_INSURANCE_INFO: "Your Information",
      RBP_NETWORK: "RBP Network",
      OTHER_NETWORK: "Other Network",
      MEDICAL: "Medical",
      CALENDAR: "Calendar",
      DEDUCTIBLE: "Deductible",
      USED: "Used",
      INDIVIDUAL: "Individual",
      FAMILY: "Family",
      OUT_OF_POCKET_LIMIT: "Out of Pocket Limit",
      PHYSICIAN_SERVICES: "Physician Services",
      PREVENTIVE: "Preventive",
      COPAY: "Copay",
      NOTES: "Notes",
      MAY_ALWAYS_BE_ZERO_IN_NETWORK: "May always be zero in network",
      PCP_OFFICE_VISIT: "PCP office visit",
      SPECIALIST: "Specialist",
      REFERRAL_NEEDED: "Referral needed",
      URGENT_CARE: "Urgent Care",
      CHIROPRACTOR: "Chiropractor",
      VISITS_YEAR: "visits/year",
      MENTAL_HEALTH: "Mental Health",
      PRE_CERT_REQUIRED_30_DAY_LIMIT: "Pre-cert required, 30 day limit",
      INPATIENT_HOSPITAL: "Inpatient Hospital",
      AFTER_DEDUCTIBLE: "after deductible",
      OUTPATIENT_SURGERY: "Outpatient Surgery",
      EMERGENCY_ROOM: "Emergency Room",
      DIAGNOSTIC_TESTS: "Diagnostic Tests",
      LAB: "Lab",
      X_RAY: "X-Ray",
      HIGH_TECH_IMAGING: "High Tech Imaging",
      RX_COPAY_TYPES: "Rx Copay Types",
      REGULAR_RX_COVERAGE: "Regular RX Coverage",
      GENERIC: "Generic",
      PREFERRED: "Preferred Brand",
      BRAND: "Not-preferred Brand ",
      SPECIALITY: "Specialty",
      MAIL_ORDER_RX_COVERAGE: "Mail Order Rx Coverage",
      VIEW_PLAN_SUMMARY: "View plan summary",
      VIEW_EDIT_CARD_PHOTO: "View/Edit card photo",
      SHOW_RED_CARD: "View Card",
      RED_CARD: "RED CARD",
      UPLOAD_PHOTO: "Upload Photo",
      COMPLETE_ATTACHMENT: "Complete Attachment",
      GENERAL_INFO: "General info",
      DATE_OF_BIRTH: "Date of Birth",
      GENDER: "Gender",
      GROUP_NUMBER: "Group Number",
      PLAN_NAME: "Plan Name",
      MEMBER_SERVICES: "Member Services",
      RX_SERVICES: "RX services",
      PHARMACY_BENEFITS_INFO: "Pharmacy benefits info",
      RX_BIN: "Rx Bin",
      RX_CARRIER: "Rx Carrier",
      CURRENT_COVERAGE_INFO: "Current Coverage Info",
      COVERAGE_LEVEL: "Coverage Level",
      COVERAGE_PERIOD: "Coverage Period",
      COVERAGE_STATUS: "Coverage Status",
      ACTIVE: "Active",
      MEMBER_AND_CURRENT_BENEFITS: "Member and Current Benefits",
      DENTAL: "Dental",
      VISION: "Vision",
      SPOUSE: "Spouse",
      CHILD: "Child",
      MEMBER: "Member",
      LOADING_INFORMATION: "Loading Information . .",
      EMAIL_INFO_TO_PROVIDER: "Email Information to Provider",
      SEND: "SEND",
      SEND_INFO: "Send Information",
      TAKE_PHOTO: "Take Photo",
      SELECT_PHOTO: "Select Photo",
      QUESTION_ABT_YOUR_HEALTH_PLAN:
        "Questions about your health plan, enrollment, and eligibility",
      QUESTIONS_ABT_SPECIFIC_CLAIMS_AND_COVERAGE:
        "Questions about a specific claims and coverage",
      WHAT_PHYSICIANS_ARE_IN_NETWORK: "What physicians are in-network?",
      YOU_HAVE_RECEIVED_BALANCE_BILL: "You have received a balance bill",
      HUMAN_RESOURCES: "Human resources",
      FAX: "Fax",
      PATIENT_ADVOCACY_CENTER: "Patient Advocacy Center",
      REGISTER: "Register",
      STEP_1_4: "Step 1 of 4",
      FIRST_NAME: "First Name",
      LAST_NAME: "Last Name",
      CANNOT_COTAIN_SPACES: "Cannot contain spaces",
      CREATE_PASSWORD: "Create Password",
      CREDENTIAL: "Credential",
      GENDER: "Gender",
      MEDICAL_SCHOOL: "Medical School",
      GRADUATION_YEAR: "Graduation Year",
      HOSPITAL_AFFILIATIONS: "Hospital Affiliations",
      VBP_ACCEPTANCE_RATING: "VDHP Acceptance Rating",
      REPORTED_QUALITY_MEASURES: "Reported Quality Measures",
      ACCEPTS_MEDICARE_ASSIGNNMENT: "Accepts Medicare Assignment",
      CONFIRM_PASSWORD: "Confirm Password",
      ANSWER: "Answer",
      EMAIL_ADDRESS: "Email Address",
      AGREE_TO_CONTINUE: "Agree to continue",
      REGISTRATION: "Registration",
      REVIEW_YOUR_INFO: "Review your information",
      PERSONAL: "Personal",
      SUCCESSFULLY_REGISTERED: "Successfully registered",
      CHANGE_EMAIL: "Change email",

      CONTACT: "Contact",
      VBP_NETWORK: "VBP Plan",
      REMOVE_PHOTO: "Remove Photo",
      CONFIRM_MESSAGE_DELETE: "Click OK to delete this message.",
      CONFIRM_MESSAGE_DELETE_FILE: "Click OK to delete this file.",
      CONFIRM_MESSAGE_DELETE_ALL: "Click OK to delete all messages.",
      IMAGE_ADD_UPDATE_DELETE_CARD:
        "Click Image to add/update or delete Plan card image",
      FRONT_SIDE_OF_CARD: "Front side of the card",
      TAKE_LANDSCAPEMODE_PHOTO_NOTE:
        "Please take the photo in landscape mode to get full card view",
      BACK_SIDE_OF_CARD: "Back side of the card",
      NO_QUALITY_RATINGS: "No Quality Ratings Available",
      NOT_PROVIDED: "Not Provided",
      FOUND: "Found",
      SET_MAP_LOCATION: "Find on Map",
      YOUR_EST_COST: "Your Est. Cost",

      ZIP: "Zip",
      STATE: "State",
      CITY: "City",
      TAKE_LANDSCAPE_IMAGE_NOTES:
        "Please take the photo in landscape mode to get full image view",
      CALENDAR_OR_PLANYEAR: "Calendar or Plan Year",

      CAMERA_GALLERY: "Camera Gallery",
      SEARCH_RESULTS: "Search Results",
      NO_MESSAGES_AVAILABLE: "No messages available",
      DELETE: "Delete",
      DELETEALL: "Delete All",
      HOME: "Home",
      HOME_PAGE: "Home Page",
      FIND_DOCTOR: "Find Doctor",
      CONTACT_INFORMATION: "Contact Information",
      /*	DOWNLOADING : 'Downloading',*/
      MY_PROFILE: "My Profile ",
      CURRENT_PASSWORD: "Current Password",
      NEW_PASSWORD: "New Password ",
      MESSAGE_DETAILS: "Message Details",
      SELECT_LOCATION: "Select Location",
      ENTER_VALID_EMAIL: "Enter valid Email",
      PLEASE_FILL_REQUIRED_FIELDS: "Please fill the required fields",
      EMAIL_UPDATED_SUCCESSFULLY: "Email updated successfully ",
      INVALID_DATA: "Invalid data",
      MEMBER_INFO_UPDATED_SUCCESSFULLY: "Member Info updated successfully",
      ERROR_WHILE_UPDATING_MEMBER_INFO: "Error while updating Member Info ",
      PLAN_INFORMATION: "Plan Details",
      MY_INSURANCE_CARD: "My Plan Card",
      MY_INSURANCE_CARD_PHOTO: "My Plan Card Photo",
      EDIT_PHOTO: "Edit Photo",
      LOADING_CALL_INSURANCE_INFO: "Loading Call Plan info...",
      SEARCHING_DOCTORS: "Searching doctors...",
      SEARCHING_HOSPITALS: "Searching hospitals...",
      LOADING: "Loading...",
      MORE_INFORMATION: "More information",
      DELETING_MESSAGE: "Deleting message...",
      KEYWORD_SEARCH: "Keyword Search",
      SYNOPSIS: "SYNOPSIS",
      PROCEDURE_SYNOPSIS: "PROCEDURE SYNOPSIS",
      PROCEDURE_INFORMATION: "Procedure Information",
      LOADING_MESSAGES: "Loading Messages...",
      LOADING_INSURANCE_CARD_INFO: "Loading Plan card info...",
      LOADING_PLAN_INFORMATION: "Loading plan information...",
      DOWNLOADING: "Downloading..",
      SEARCHING_PROCEDURES: "Searching Procedures...",
      LOADING_PROFILE_INFO: "Loading Profile info...",
      UPDATING_MEMBER_INFO: "Updating Member Info...",
      VALIDATING: "Validating...",
      LOADING_YOUR_DOCTOR_INFO: "Loading Your Doctor info...",
      ENTER_YOUR_LOCATION:
        "Unable to get current location. Enter your location",
      ENTERED_INCORRECT_ADDRESS: "Entered address is incorrect",
      PCP_SET_SUCCESSFULLY: "PCP set Successfully",
      UNABLE_TO_SET_PRIMARY_CARE_PHYSICIAN:
        "Unable to set as Primary Care Physician",
      SELECT_ONE_PRICE_FILTER: "Select at least one price filter",
      SELECT_ONE_QUALITY_FILTER: "Select at least one quality filter",
      PLEASE_FILL_REQUIRED_DETAILS: "Please fill required details",
      RECORDS_NOT_MATCHED: "Records not matched",
      MESSAGE_DELETED_SUCCESSFULLY: "Message deleted successfully",
      PASSWORD_UPDATED_SUCCESSFULLY: "Password updated successfully",
      INVALID_USER_DATA: "Invalid user data",
      PASSWORDS_MUST_MATCH: "Passwords must match",
      MUST_1: "Passwords must contain 1 uppercase,1 lowercase and 1 number",
      UNABLE_GET_USER_AGREEMENT: "Unable to get User Agreement",
      SUCCESSFULLY_REGISTERED: "Successfully registered",
      INVALID_REGISTRATION_DATA: "Invalid Registration data",
      ARE_YOU_SURE_ENABLE_LOCATION_SERVICE:
        "Are you sure you want to enable location service?",
      ARE_YOU_SURE_GRANT_LOCATION_SERVICE:
        "Are you sure you want to grant location service?",
      DO_YOU_WANT_TO_SET: "Do you want to set ",
      PRIMARY_CARE_PHYSICIAN: " as Primary Care Physician?",

      SEARCH_BY_KEYWORD: "Search by keyword",
      BY_CLAIM_TYPE : 'By Claim Type',
      BY_MEMBER : 'By Member',
      BY_YEAR : 'By Year',
      FIND_CLAIMS : 'Find Claims',
      FACILITY_ACCEPTANCE: "VDHP Acceptance",
      PROCESSED_DATE : "Processed Date - Newestto Oldest",
      TITLE_BACKGROUND_MODE: "Working in background...",
      DESC_BACKGROUNND_MODE: "Don't close the app please.",
      PRESCRIPTION_PRICING: "Prescription Pricing",
      MY_CLAIMS: "View Claims",
      VERSION: "Version",
      VERSION_REAL: "Version - 3.0.1",
      DISCLAIMER: `Provider information contained in this Directory was last updated Date and therefore may have changed. Before scheduling your appointment or receiving services, check with the provider to confirm participation in the network, location and if the provider is accepting new patients.`,
      PRACTICENAME: "Practice name",
      BANER_TEXT:
        "Due to scheduled server maintenance, HST???s websites and applications (including mobile app) will be unavailable starting Friday, December 10th at 6:00pm PST and will resume Sunday, December 12th at 6:00pm PST",
      BANER_TEXT_PRICE:
        "The prescription pricing tool has been taken offline temporarily while we work on a cleanup effort. We will re-enable the functionality at a later date",
    })

    // Spanish Text
    .translations("es", {
      VERSION_REAL: "Version - 3.0.1",
      TITLE: "HST",
      MESSAGETEXT: "Escribir un mensaje. .",
      HELLO: "Hola",
      BACK: "Volver",
      CHANGE: "Cambiar",
      LOGIN: "Iniciar sesi??n",
      LOGIN_CAPS: "INICIAR SESI??N",
      REGISTER: "Registro",
      REGISTER_CAPS: "REGISTRO",
      REGISTRATION: "Registro",
      USERNAME: "Nombre de usuario",
      PASSWORD: "Contrase??a",
      FORGOT_USERNAME: "??Olvid?? su nombre de usuario",
      FORGOT_PASSWORD: "??Olvid?? su clave",
      NO_ACCCOUNT: "??NO TIENES UNA CUENTA? REG??STRESE AQU??",
      OK: "De acuerdo",
      ERROR: "Entrada inv??lida",
      NOT_EMPTY_MSG: "Nombre de usuario y la contrase??a no debe estar vac??o",
      INVALID_USER: "Nombre de usuario v??lido y la contrase??a",
      NO_CONN_ERR_TITLE: "Network Error",
      NO_CONN_ERR: "Red connecton error , por favor verifica internet",

      CANCEL: "CANCELAR",
      NEXT: "SIGUIENTE",
      SUBMIT: "ENVIAR",
      STEP: "Paso",
      SELECT_PROCEDURE: "Seleccine Un Procedimiento",
      OR_SELECT: "O SELECCIONE",
      SELECT: "SELECCIONAR",
      SELECT_BODY: "Porfavor Seleccionar una Parte del Cuerpo",
      BODY_PART: "PARTE DEL CUERPO",
      VERIFY_IDENTITY: "verificar identidad",
      MEMBERID: "ID del afiliado",
      GROUPID: "ID del grupo",
      FIRSTNAME: "Nombre de pila",
      LASTNAME: "Apellido",
      BIRTH_DATE: "Fecha de nacimiento",

      UNAME_AND_PASSWD: "Nombre de usuario y contrase??a",
      CREATE_PASSWORD: "Crear contrase??a",
      CONFIRM_PASSWORD: "Confirmar contrase??a",
      CONFIRM: "Confirmarci??n",
      SECURITY_QUESTION: "Pregunta de seguridad",
      EMAIL_ADDRESS: "Direcci??n de correo electr??nico",
      STRICT_MUST_6_CHAR: "Debe tener como m??nimo 6 caracteres.",
      CANNOT_CONTAIN_SPACE: "No pueden contener espacios.",
      PASS_SPEC: "Debe contener 1 may??sculas, min??sculas y 1 1 N??mero",
      QUESTION: "Pregunta",
      ANSWER: "Responder",
      ERROR_SECURITY: "Por favor, conteste correctamente.",
      SUCCESS_RESET_PWD: "Contrase??a cambiada con ??xito",
      ERROR_RESET_PWD: "No se puede cambiar la contrase??a",
      LOADING_DELETE_FILE: "Eliminando Archivo . .",
      AGREE_TO_CONTINUE: "De acuerdo en continuar",

      REVIEW_INFO: "Revisa tu informaci??n",
      PERSONAL: "Personal",

      REQ_FIELD: "required field",

      en: "English",
      es: "Espa??ol",
      sv: "Svenska",

      OPENING_SCREEN_FOOTER_EMERGENCY: "Atenci??n de urgencia",
      OPENING_SCREEN_FOOTER_CALL:
        "Llame al 911 o vaya directamente a la sala de emergencias m??s cercana",
      RESET_PASSWORD: "Reset Password",
      SUCCESS: "Success",
      LANGUAGE: "Idioma",
      WRITE_MESSAGE: "Escriba el mensaje",
      YOUR_USERNAME: "Su nombre de usuario",
      OK: "OK",
      SET_NEW_PWD: "Crear nueva clave",
      ENTER_NEW_PWD: "Ingrese una nueva clave",
      MUST_6_CHAR:
        "Debe tener como m??nimo 6 caracteres: al menos 1 may??scula, 1 min??scula y 1 n??mero ",
      MUST_1_CHAR: "Debe contener 1 may??scula, 1 min??scula y 1 n??mero ",
      RETYPE_NEW_PWD: "Vuelva a ingresar la nueva clave",
      SUCCESS: "????xito! ",
      SUCCESS_RESET_PWD: "Cambi?? la clave con ??xito",
      EMERGENCY_CARE_CALL:
        "Para atenci??n de emergencia: Llame al 911 o vaya directamente a la sala de emergencias m??s cercana",
      WELCOME: "Bienvenido",
      SEND_US_MESSAGE: "Env??enos un mensaje",
      MESSAGES: "Mensajes",
      PRESCRIPTION_DRUG_PRICING: "Precio de los medicamentos recetados",
      CONFIRM_OPEN_LINK:
        "Este enlace est?? intentando abrir una p??gina web en su navegador web. ??Desea continuar?",
      YOUR_DOCTOR: "Su M??dico",
      FIND_A_PROVIDER: "Busque un proveedor",
      CALL_INSURANCE: "Llamar al seguro",
      CHANGE_PASSWORD: "Cambiar la clave",
      UPDATE_MEMBER_INFO: "Actualizar la informaci??n del afiliado",
      VIEW_TERMS_USE: "Ver las Condiciones de uso",
      SIGNOUT: "Cerrar sesi??n",
      SAVE: "Guardar",
      PROVIDER_CONTACT_INFO: "Informaci??n de contacto del proveedor",
      NAME: "Nombre ",
      EMAIL: "Correo electr??nico",
      OFFICEHOURS: "Horas de Oficina",
      WAITTIME: "Tiempo de Espera",
      HOSPITALACREDITATION: "Acreditaci??n del hospital",
      AcceptsNewPatients: "Acepta nuevos pacientes",
      BoardCertification: "Certificaci??n de la Junta",
      DateofLastUpdate: "Fecha de la ??ltima actualizaci??n",
      ECPFacility: "Instalaci??n de ECP",
      ECPPractitioner: "Profesional de la ECP",
      LanguagesSpoken: "Idiomas que se hablan",
      LanguagesSpokenStaff: "Idiomas que se hablan - Personal",
      ProceduresPerformed: "Procedimientos realizados",
      LICENSE: "Licencia",
      PHONE_NO: "N.?? de tel??fono",
      PHONE: "Tel??fono",
      ADDRESS: "Direcci??n",
      ADDRESS_1: "Direcci??n 1",
      ADDRESS_2: "Direcci??n 2",
      DIRECTIONS_TO_PROVIDER:
        "Instrucciones para llegar a la direcci??n del proveedor",
      OFFICE_HOURS: "Horario de atenci??n",
      OTHERS_NOTES: "Otras observaciones",
      PROCEDURE: "Intervenci??n",
      PLEASE_SELECT: "Seleccione",
      WITHIN: "Dentro de las",
      TYPE: "Seleccionar tipo...",
      SUBTYPE: "Seleccionar subtipo...",
      SERVICE: "Seleccionar servicio...",
      MY_CURRENT_LOCATION: "Mi ubicaci??n actual",
      INPUT_LOCATION: "Ingrese la ubicaci??n",
      FIND_ON_MAP: "Encontrar en el mapa",
      PROVIDER_DONOT_PARTICIPATE_TITLE: "Por favor, lea antes de proceder",
      PROVIDER_DONOT_PARTICIPATE:
        "Elegir un proveedor que no participa en la red de su plan puede ocasionar costos m??s elevados o el rechazo de la reclamaci??n",
      PROVIDER_DONOT_PARTICIPATE2: `
			Trabajamos duro para asegurarnos de que nuestros datos son exactos, pero la informaci??n del proveedor cambia frecuentemente. Adem??s, encontrar
			un proveedor en este sitio no es una garant??a de cobertura de beneficios. Antes de recibir atenci??n, debe
			contacto:`,
      PROVIDER_DONOT_PARTICIPATE3: `- El proveedor para verificar el estado del nuevo paciente, la ubicaci??n y la participaci??n en la red.`,
      PROVIDER_DONOT_PARTICIPATE4: `- Su plan de salud para verificar sus beneficios.`,
      SEARCH: "Buscar",
      STATESPECIFICDIS: "Renuncias especificas de estado",
      SEARCH_RESULT: "Resultado de la b??squeda",
      MAP_RESULTS: "Resultados en el mapa",
      REFINE_RESULTS: "Refinar los resultados",
      FILTER: "Filtrar",
      PROVIDER_LOCATION: "Ubicaci??n del proveedor",
      DIRECTION_TO_HERE: "Instrucciones para llegar aqu??",
      FILTER_BY: "Filtrar por",
      PRICE: "Precio",
      QUALITY: "Calidad",
      ANY: "Cualquiera",
      MESSAGE_FINAL:
        "Su consulta de saldo ha sido enviada con ??xito al Centro de Defensa de Patentes. Su inquietud ser?? atendida en un plazo de 2 d??as h??biles.",
      MESSAGE_FUNALLINK:
        "Para informaci??n adicional sobre el proceso de la factura de saldo, puedes ver un corto video aqu??",
      MESSAGE_FINAL2: "Gracias!",
      MESSAGE_FINAL4:
        "Su consulta ha sido enviada con ??xito a nuestro centro de soporte. Su inquietud ser?? atendida en un plazo de 2 d??as h??biles.",
      MESSAGE_FINAL3: "VOLVER AL INICIO",
      MESSAGE_ERROR_SEND:
        "Por favor, adjunte todas las p??ginas de su factura de saldo, ya que el Centro de Defensa del Paciente las necesita para revisar su caso.",
      MESSAGE_NOTE:
        "Este mensaje ser?? enviado a nuestro Centro de Defensa del Paciente. Nos pondremos en contacto con usted lo antes posible.",
      NOTE: "Nota:",
      NOTE_PLAN: "Notas",
      MESSAGE_ATTACH2: "Adjuntar Archivo",
      MESSAGE_ATTACH1:
        "Aqu?? es donde usted adjuntar?? una copia de su factura de saldo. Puede tomar una foto o seleccionar una foto que ya haya tomado.",
      MESSAGE_ATTACH3: "Por favor, suba los archivos.",
      MESSAGE_FILE: "Archivos:",
      MESSAGE_BILL1: "Por favor, siga los pasos:",
      MESSAGE_BILL2: "Adjuntar todas las fichas de la factura de saldo.",
      MESSAGE_BILL3: "Revisar el archivo adjunto.",
      MESSAGE_BILL4: "Escribe tu mensaje.",
      MESSAGE_BILL5: 'Haga clic en "Enviar".',
      MESSAGE_BILL6: "Por favor, escriba su mensaje.",
      MESSAGE_BILL7: "Opcionalmente, puede adjuntar un correo electr??nico.",
      MESSAGE_BILL8: "Revise el mensaje y los archivos adjuntos.",
      MESSAGES_HELP: "??C??mo podemos ayudarlo?.",
      MESSAGES_BODY:
        "Usted es importante para nosotros y es importante para nosotros abordar su preocupaci??n. Su mensaje ser?? enviado directamente a nuestro Centro de Defensa del Paciente.",
      MESSAGES_BILL: "Env??e su factura de saldo.",
      MESSAGES_CONCERN: "Env??anos un mensaje general.",
      MESSAGES_HISTORY: "Ver todo el historial de mensajes.",
      MESSAGES_STARTED: "Empezar",
      TERMS_USE: `<b>HSTECHNOLOGY SOLUTIONS, INC. APLICACI??N HST CONNECT
T??RMINOS Y CONDICIONES DE USO</b>

Actualizado a noviembre de 2017

<b>LEA CUIDADOSAMENTE LOS T??RMINOS Y CONDICIONES DE USO ANTES DE USAR NUESTRA APLICACI??N PARA DISPOSITIVOS M??VILES Y SU SITIO WEB ASOCIADO.</b>

HSTechnology Solutions, Inc. (???HST???, ???nosotros???, o ???nuestro(s)???), le ofrece la aplicaci??n para dispositivos m??viles HST Connect (la ???App???) y su sitio web asociado (incluyendo la versi??n optimizada de dicho sitio web para dispositivos m??viles, el ???Sitio Web???) bajo los siguientes t??rminos y condiciones (este ???Acuerdo???). Si usted es residente de los Estados Unidos, su contrato es con HSTechnology Solutions, Inc., una corporaci??n de Delaware cuyas oficinas principales se encuentran en Irvine, California. A la App y el Sitio Web se les denominar?? conjuntamente la "Aplicaci??n". Para fines de este Acuerdo, "usted" o "usuarios" se refiere a los individuos que usan la Aplicaci??n. Cualquier informaci??n de salud identificable que usted proporcione mientras usa la Aplicaci??n ser?? usada por HST de acuerdo con su Pol??tica de Privacidad (por favor, consulte nuestro sitio web ???www.hstechnology.com???).

Al usar la Aplicaci??n y/o hacer clic sobre el bot??n "Estoy de acuerdo", usted se compromete incondicionalmente a cumplir y estar sujeto a este Acuerdo. Si usted no se compromete a estar sujeto y cumplir con todos los t??rminos de este Acuerdo, no podr?? hacer uso de nuestra Aplicaci??n.

<b>Usuarios previstos</b>

La Aplicaci??n est?? disponible solamente para usuarios que tengan al menos 18 a??os de edad. Bajo ninguna circunstancia deber?? ser usada la Aplicaci??n por ni??os menores de 14 a??os, y nosotros no recopilaremos deliberadamente informaci??n personal acerca de ninguna persona que sepamos que forma parte de tal grupo de edad. Si usted est?? utilizando la Aplicaci??n para beneficio de un menor, no proporcione informaci??n concerniente a dicho menor, a menos que cuente con el consentimiento de los padres o tutores del menor, incluyendo su consentimiento a nuestra Pol??tica de Privacidad. Si usted descubre que su hijo ha estado usando la Aplicaci??n sin su consentimiento, o que alguien ha estado utilizando la solicitud para o en nombre de su hijo sin su consentimiento, por favor p??ngase en contacto con nosotros usando la informaci??n provista m??s adelante en la secci??n "C??mo contactarnos". Nosotros llevaremos a cabo las acciones razonables para eliminar la informaci??n de su hijo de nuestras bases de datos activas. Usted no podr?? proporcionar acceso a, o usar la Aplicaci??n o el Contenido (seg??n se define m??s adelante) de la misma para el beneficio de terceras partes ni hacer uso comercial de la Aplicaci??n ni de sus Contenidos relacionados, pero podr?? usar la Aplicaci??n para su uso personal sujeto a este Acuerdo. No se permite el uso ni el acceso a la Aplicaci??n en aquellos lugares donde est?? prohibido. Al acceder y usar la aplicaci??n, usted declara y certifica que: (a) toda la informaci??n de registro provista por usted es veraz y exacta; (b) usted mantendr?? la exactitud de dicha informaci??n; (c) el uso que usted har?? de la Aplicaci??n cumplir?? y no infringir?? ninguna ley, reglamento, ordenamiento o directriz aplicable, y (d) usted acepta recibir mensajes y materiales de promoci??n que ofrezcan compras dentro de la aplicaci??n.

<b>Modificaciones a este Acuerdo</b>

Nos reservamos el derecho de actualizar o modificar este Acuerdo en cualquier momento y por cualquier motivo, sin penalizaci??n ni responsabilidad hacia usted o cualquier tercera parte. Al continuar usando la Aplicaci??n luego de tales cambios, usted se compromete incondicionalmente a cumplir y estar sujeto a los cambios en este Acuerdo. Por este motivo, le recomendamos a revisar peri??dicamente este Acuerdo.

</b>Descargos de responsabilidad</b>

El uso que usted haga de cualquier aspecto de la Aplicaci??n ser?? bajo su propio riesgo. Debe consultar con los profesionales de la salud que lo atienden y tomar sus decisiones m??dicas con base en sus recomendaciones. No podemos aceptar, y no asumiremos responsabilidad con respecto a cualquier actividad que usted pueda emprender a trav??s del uso de la Aplicaci??n.
Si usted usa y/o accede a la Aplicaci??n en o desde un dispositivo Android al cual usted o alguien m??s haya otorgado permisos de usuario root, o en o desde un dispositivo iOS al cual se haya efectuado jailbreak, HST no ser?? responsable de la seguridad de sus datos, incluyendo su informaci??n personal, y usted ser?? completamente responsable de cualquier fuga de informaci??n, acceso ilegal, p??rdida y/o corrupci??n de tales datos.

HST NO HACE NINGUNA MANIFESTACI??N NI OTORGA NINGUNA GARANT??A CON RESPECTO DE LA APLICACI??N. TERCERAS PARTES, INCLUYENDO OTROS USUARIOS DE LA APLICACI??N, PODR??N PROVEER INFORMACI??N ACERCA DE MEDICAMENTOS, SALUD, ORIENTACI??N M??DICA Y DE OTRA ??NDOLE. HST NO SER?? RESPONSABLE POR NING??N CONTENIDO QUE SEA PROVISTO POR TERCERAS PARTES Y/O POR CUALQUIER OTRO USUARIO DE LA APLICACI??N. CUALQUIER ACCI??N QUE USTED TOME CON BASE EN EL CONTENIDO, LAS NOTIFICACIONES Y DEM??S INFORMACI??N PROVISTA POR LA APLICACI??N SER?? TOMADA BAJO SU PROPIO RIESGO Y NO ACEPTAREMOS NINGUNA RESPONSABILIDAD AL RESPECTO. USTED SIEMPRE DEBER?? COMPROBAR TODA LA INFORMACI??N PROVISTA A TRAV??S DE LA APLICACI??N PARA ASEGURAR SU EXACTITUD. HASTA DONDE LO PERMITA LA LEGISLACI??N APLICABLE, LA APLICACI??N SE PROPORCIONA "TAL CUAL" Y SEG??N DISPONIBILIDAD. NO HACEMOS REPRESENTACIONES NI OTORGAMOS GARANT??AS DE NING??N TIPO, YA SEA EXPRESAS O IMPL??CITAS, CON RESPECTO AL FUNCIONAMIENTO DE LA APLICACI??N NI DE LA INFORMACI??N, CONTENIDO, MATERIALES O PRODUCTOS INCLUIDOS O REFERIDOS EN ESTA. HASTA DONDE LO PERMITA LA LEGISLACI??N APLICABLE, DESCONOCEMOS TODAS LAS GARANT??AS EXPRESAS O IMPL??CITAS, INCLUYENDO ENTRE OTRAS, LAS GARANT??AS IMPLICITAS DE COMERCIABILIDAD, DE NO VIOLACI??N DE LOS DERECHOS DE TERCERAS PARTES Y DE IDONEIDAD PARA UN FIN ESPEC??FICO. USTED RECONOCE QUE SU USO DE LA APLICACI??N ES BAJO SU PROPIO RIESGO. DESCONOCEMOS CUALQUIER GARANT??A IMPL??CITA O LEGAL: (I) CON RELACI??N A LA SEGURIDAD, EXACTITUD, CONFIABILIDAD, OPORTUNIDAD Y/O DESEMPE??O DE LA APLICACI??N; O (II) DE QUE LA APLICACI??N ESTAR?? LIBRE DE ERRORES O DE QUE CUALQUIER ERROR SER?? CORREGIDO; O (III) CON RELACI??N AL DESEMPE??O O LA EXACTITUD, CALIDAD, VIGENCIA, INTEGRIDAD O UTILIDAD DE CUALQUIER INFORMACI??N PROVISTA POR LA APLICACI??N. NO GARANTIZAMOS QUE NINGUNA DESCRIPCI??N PROVISTA A TRAV??S DE LA APLICACI??N CON RELACI??N A MEDICAMENTOS U OTRAS COSAS SEA EXACTA, ??NTEGRA, CONFIABLE, VIGENTE, SEGURA NI QUE EST?? LIBRE DE ERRORES. NINGUNA COMUNICACI??N, INFORMACI??N NI RECOMENDACI??N EMITIDA POR NOSOTROS O NUESTROS REPRESENTANTES, YA SEA ORAL O POR ESCRITO, OTORGAR?? NINGUNA GARANT??A. SI USTED DECIDE CONFIAR EN TAL INFORMACI??N, LO HACE ENTERAMENTE BAJO SU PROPIO RIESGO. ESTE DESCARGO DE RESPONSABILIDAD CONSTITUYE UNA PARTE ESENCIAL DE ESTE ACUERDO.

LA INFORMACI??N CONCERNIENTE A LA SALUD DEBER?? SER INTEGRADA POR PROFESIONALES DE LA SALUD EN EL EXPEDIENTE CL??NICO GENERAL DE LOS INDIVIDUOS QUE EST??N BAJO SU SUPERVISI??N, Y ESTA DEBER?? SER COTEJADA CON OTROS DATOS CL??NICOS SEG??N LO REQUIERAN LOS EST??NDARES PROFESIONALES DE LA ESPECIALIDAD DEL PROFESIONAL DE LA SALUD. EL USO DE LOS DATOS ACCEDIDOS MEDIANTE LA APLICACI??N, AS?? COMO LAS DECISIONES DE TRATAMIENTO BASADAS EN TAL INFORMACI??N SON ENTERAMENTE RESPONSABILIDAD DEL PROFESIONAL DE LA SALUD, Y HST NO ASUME NINGUNA RESPONSABILIDAD CON RESPECTO DE LOS MISMOS.

<b>Requisitos de uso</b>

Para usar la App o el Sitio Web, usted debe contar con dispositivos m??viles y de c??mputo compatibles, acceso a internet y a servicios de mensajer??a y datos m??viles, y cierto software necesario. Podr??n aplicarse comisiones y cargos por el uso de internet o de los servicios m??viles, y podr?? requerirse que usted adquiera hardware o software para permitir que los dispositivos tengan acceso a la Aplicaci??n. Usted acepta que es responsable del cumplimiento con esos requisitos, del uso que usted hace de internet y de cubrir cualquier comisi??n, cargo o gasto asociado.

<b>La Aplicaci??n es una herramienta</b>

La Aplicaci??n est?? dise??ada para ser una herramienta para la gesti??n de la informaci??n concerniente a la salud para los usuarios. No es recomendable ni deber?? confiar en la Aplicaci??n como su herramienta principal para el manejo de su informaci??n concerniente a la salud. Como se explica a detalle en la secci??n "Tecnolog??a, soporte t??cnico" m??s adelante, la Aplicaci??n podr??a no funcionar como se espera. En particular, la Aplicaci??n no funcionar?? adecuadamente si su dispositivo est?? descompuesto o apagado, si el software de la Aplicaci??n no se encuentra habilitado, o si cualquier hardware o software de su dispositivo evita que la Aplicaci??n funcione como se espera. El mantenimiento de sus dispositivos m??viles y de c??mputo es su responsabilidad. Usted reconoce que la Aplicaci??n, y la utilidad de cualquiera de sus alertas o notificaciones, dependen de la informaci??n que usted ingrese en la Aplicaci??n. Las personas que usen la Aplicaci??n asumen enteramente su responsabilidad del uso de la Aplicaci??n y aceptan que no seremos responsables de reclamaciones, p??rdidas o da??os derivados del uso de la Aplicaci??n.

<b>No es orientaci??n m??dica</b>

La informaci??n, orientaci??n, recomendaciones, mensajes, publicaciones, texto, elementos gr??ficos, software, fotograf??as, videos, datos y otros materiales son puestos a disposici??n por nosotros o por terceras partes, incluyendo otros usuarios, a trav??s de la Aplicaci??n (en conjunto "Contenido"). HST no garantiza y no es responsable de la exactitud, integridad u oportunidad de ning??n Contenido.

Todo el Contenido se provee solamente para fines de informaci??n. Ning??n Contenido, incluyendo los provistos por otros usuarios de la Aplicaci??n, es ni deber?? ser considerado ni usado como sustituto de asesoramiento, atenci??n, diagn??stico o tratamiento m??dicos. La Aplicaci??n no constituye la pr??ctica de ning??n asesoramiento, diagn??stico o tratamiento m??dico, de enfermer??a ni de ninguna otra especialidad profesional de atenci??n m??dica. La confianza que deposite en cualquier Contenido u otra informaci??n provista por nosotros, nuestros empleados, nuestros usuarios o terceras partes mediante el uso de la Aplicaci??n ser?? enteramente bajo su propio riesgo, y no aceptamos responsabilidad por ello.

Siempre busque la orientaci??n de su m??dico u otro profesional de la salud calificado acerca de las dudas que tenga con relaci??n a su propia salud. Nunca ignore, evite ni retrase la obtenci??n de orientaci??n m??dica por parte de su m??dico o profesional de la salud calificado a causa de informaci??n que haya recibido u obtenido mediante el uso de la Aplicaci??n. Si tiene o sospecha que tiene alg??n problema o condici??n de salud, contacte a un profesional de la salud calificado de inmediato. Si tiene una emergencia m??dica, solicite de inmediato asistencia m??dica de emergencia.

<b>Sitios web y materiales de terceras partes</b>

Las referencias o v??nculos dentro de la Aplicaci??n hacia terceras partes o hacia sus sitios web o informaci??n, se proveen solamente para su conveniencia, y de ninguna manera esto significa que respaldamos, apoyamos o recomendamos cualquier material, producto ni servicio de terceras partes. No realizamos ninguna manifestaci??n con respecto del contenido, exactitud, integridad, decencia, legalidad, no infracci??n, calidad ni de ning??n otro aspecto del material en tales sitios web de terceras partes ni con respecto de cualquier contenido, dato, informaci??n, aplicaciones ni materiales. No somos responsables ni asumimos ninguna responsabilidad con respecto al contenido, pr??cticas de privacidad ni 
Cuentas
Usted puede registrarse para usar la Aplicaci??n proporcionando su nombre, direcci??n de correo electr??nico y dem??s informaci??n solicitada en el formulario de registro. Podremos cambiar el m??todo de registro a nuestro criterio. Podremos rehusarnos a permitir que alg??n usuario abra una cuenta por cualquier motivo a nuestro criterio. Usted se compromete a proporcionarnos informaci??n completa y exacta al momento de crear su cuenta y mientras use la Aplicaci??n, as?? como a actualizar tal informaci??n sin demora luego de cualquier cambio. Usted ser?? responsable por cualquier inexactitud de la informaci??n que nos proporcione, o por no mantener tal informaci??n actualizada.

No comparta su cuenta ni la informaci??n de acceso con terceras partes, ni permita que ninguna tercera parte acceda a su cuenta. Usted es enteramente responsable de mantener la confidencialidad de la informaci??n de acceso de su cuenta, de la seguridad de su sistema inform??tico o dispositivo m??vil, y de todas las actividades de su cuenta, incluso si tales actividades no fueron llevadas a cabo por usted. Podremos cancelar su cuenta si usted permite a alguien usar su cuenta de manera inadecuada, o si usted o la persona que est?? usando su cuenta violan este Acuerdo. Adem??s, restringiremos el uso de su cuenta si, despu??s de un n??mero especificado de intentos, se provee informaci??n de acceso inv??lida. Usted se compromete a notificarnos de inmediato cualquier uso no autorizado de su cuenta. No seremos responsables por ninguna p??rdida ni da??o derivado del uso no autorizado de la Aplicaci??n, y usted se compromete a indemnizarnos y mantenernos en paz y a salvo en caso de cualquier uso inadecuado o ilegal de la Aplicaci??n y a hacerse cargo de los cargos e impuestos en que se incurra, a menos que nos haya notificado por correo electr??nico a support@hstechnology.com.

<b>Cancelaci??n de la cuenta</b>

Podremos por cualquier motivo, a nuestro criterio y sin notificarle, cancelar su cuenta. Los fundamentos para tal cancelaci??n podr??n incluir (i) per??odos prolongados de inactividad, (ii) violaci??n al contenido o al esp??ritu de este Acuerdo, (iii) conducta fraudulenta, acosadora o abusiva, o (iv) conducta que resulte perjudicial para otros usuarios, terceras partes y la ??tica comunitaria de nuestra Aplicaci??n o nuestros intereses de negocios. En caso de que cancelemos su cuenta, usted no podr?? registrarse nuevamente para la Aplicaci??n sin nuestro permiso expreso. Si usted cree que se ha tomado cualquier acci??n en su contra por error, cont??ctenos en support@hstechnology.com.
Adem??s, si creemos, seg??n nuestro propio criterio, que ha ocurrido una violaci??n a este Acuerdo o cualquier conducta ilegal o inadecuada, podremos tomar cualquier otra acci??n correctiva que consideremos apropiada. Investigaremos las sospechas de violaci??n a este Acuerdo o conductas ilegales e inapropiadas mediante el uso de la Aplicaci??n. Tenga en mente que cooperaremos plenamente con cualquier investigaci??n de las fuerzas del orden u ordenamiento de la corte que nos d?? indicaciones de revelar la identidad, conducta o actividades de cualquier persona que se sospeche que ha violado el presente Acuerdo o que se haya involucrado en conductas ilegales.
Usted podr?? solicitar la cancelaci??n de su cuenta en cualquier momento y por cualquier motivo enviando un mensaje por correo electr??nico a support@hstechnology.com. La suspensi??n o cancelaci??n de su cuenta no afectar?? sus obligaciones contra??das hacia nosotros en virtud de este Acuerdo (incluyendo entre otras cosas, la propiedad, indemnizaci??n, manifestaciones realizadas o garant??as otorgadas por usted, y limitaci??n de responsabilidad), incluyendo todas aquellas obligaciones que por su sentido y contexto est??n destinadas a sobrevivir a la suspensi??n o cancelaci??n de su cuenta.

<b>Tecnolog??a, soporte t??cnico</b>

No otorgamos garant??a ni garantimos que la Aplicaci??n funcionar?? en su dispositivo m??vil o inform??tico, ni de que ser?? compatible con el hardware o software de alg??n dispositivo en particular. La informaci??n se transmitir?? a trav??s de un medio que estar?? m??s all?? de nuestro control y jurisdicci??n; diversos factores, incluyendo la disponibilidad de la red, podr??n afectar la entrega de alertas o notificaciones, o interferir de otra manera con la operaci??n de la Aplicaci??n. No garantizamos ni otorgamos garant??a en contra de, y, por tanto, no asumimos ninguna responsabilidad por o con relaci??n a errores, omisiones, retrasos, fallas, interrupciones, corrupci??n ni p??rdida de datos, alertas, notificaciones ni otra informaci??n transmitida con relaci??n a su uso de la Aplicaci??n, en particular con respecto a cualquier al fallo del sistema de recordatorios que no funcione como se esperaba, incluyendo entre otras cosas, que no entregue alertas o notificaciones.

Sin limitaci??n de lo anterior, nosotros, nuestros licenciantes y nuestros representantes no realizamos ninguna manifestaci??n ni otorgamos ninguna garant??a acerca de (1) la disponibilidad, exactitud, confiabilidad, integridad, calidad, desempe??o, adecuaci??n u oportunidad de la Aplicaci??n y el Contenido, incluyendo software, texto, elementos gr??ficos, v??nculos o comunicaciones provistos en o mediante el uso de la Aplicaci??n; o (2) la satisfacci??n de ning??n reglamento gubernamental que requiera la aprobaci??n o cumplimiento de cualquier herramienta de software con respecto de la Aplicaci??n.

No tenemos la obligaci??n de proporcionar soporte t??cnico ni mantenimiento para la Aplicaci??n. En cualquier momento y por cualquier motivo, sin aviso ni responsabilidad, podemos modificar o suspender la Aplicaci??n o cualquier parte de ella, o imponer l??mites a su uso o acceso a la Aplicaci??n.

Aunque tomamos las medidas razonables para mantener la Aplicaci??n libre de virus, gusanos, caballos de Troya u otros c??digos que contienen propiedades destructivas, no garantizamos ni damos garant??a de que los archivos disponibles para descargar a trav??s de la Aplicaci??n estar??n libres de tales contaminaciones.

<b>Responsabilidades del usuario</b>

Si usted nos env??a cualquier informaci??n a trav??s de la Aplicaci??n o relacionada con esta, o nos env??a cualquier informaci??n comercial, retroalimentaci??n, idea, concepto o invenci??n mediante correo electr??nico, usted declara y certifica que tal informaci??n no es confidencial, y que usted cuenta con todas las autorizaciones necesarias para enviar o poner a disposici??n tal informaci??n. Adem??s, nos otorga la licencia mundial, irrevocable, perpetua, libre de regal??as y no exclusiva para usar, reproducir, crear obras derivadas, modificar, publicar, editar, traducir, distribuir, llevar a cabo y exhibir la comunicaci??n o su contenido en cualquier medio, o en cualquier forma, formato o foro conocido o desarrollado a partir de entonces, incluyendo el derecho a sublicenciar a trav??s de m??ltiples niveles de sublicencias.

Usted adem??s acepta que:
???    no reproducir??, duplicar??, copiar??, vender??, revender??, o explotar?? la Aplicaci??n, su Contenido, su software ni ninguna parte de lo anterior;
???    no usar?? la aplicaci??n para ning??n fin que viole la legislaci??n local, estatal, nacional o internacional;
???    no solicitar?? la contrase??a ni la informaci??n personal de otra persona mediante pretensiones falsas;
???    no se har?? pasar por otra persona o entidad, ni de otra forma distorsionar?? su afiliaci??n con ninguna persona o entidad, ni usar?? la cuenta o la contrase??a de otro usuario sin su permiso;
???    no violar?? los derechos legales de otros, incluyendo la difamaci??n, el abuso, el acecho y las amenazas a los usuarios;
???    no infringir?? los derechos de propiedad intelectual, los derechos a la privacidad, ni los derechos morales de terceras partes;
???    no publicar?? ni transmitir?? ning??n Contenido que sea (o que usted crea razonablemente, o deba creer razonablemente que sea) ilegal, fraudulento o desautorizado, o que fomente tales actividades, o que involucre (o que usted crea razonablemente, o deba creer razonablemente que involucre) material robado, ilegal, falsificado, fraudulento, pirateado o desautorizado;
???    no publicar?? falsedades ni distorsiones, incluyendo aquellas con respecto de cualquier informaci??n m??dica o concerniente a la salud; y
???    no publicar?? ni transmitir?? ning??n Contenido que sea (o que usted crea razonablemente, o deba creer razonablemente que sea) calumnioso o difamatorio, ofensivo (incluyendo material que promueva o glorifique el odio, la violencia o la intolerancia, o que de otra forma resulte inapropiado para la ??tica comunitaria de la Aplicaci??n).

Usted se compromete a no interferir ni tratar de interferir con el funcionamiento adecuado de la Aplicaci??n, ni a alterar las operaciones o violar la seguridad de la Aplicaci??n. Las violaciones a la operaci??n o seguridad de sistemas o redes pueden tener como resultado responsabilidad civil y/o criminal. Investigaremos las posibles ocurrencias de tales violaciones, y podremos involucrarnos y cooperar con las autoridades del orden p??blico para perseguir a cualquier persona involucrada en tales violaciones. Usted se compromete a cumplir con todas las responsabilidades y obligaciones del usuario declaradas en este Acuerdo. La falta de aplicaci??n de las reglas o el hecho de que no establezcamos acci??n con respecto de un incumplimiento de este Acuerdo por parte suya o de otros, no consistir?? consentimiento ni dispensa, y nos reservamos el derecho de hacer aplicar tal t??rmino enteramente a nuestro criterio. Ninguna dispensa por violaci??n o incumplimiento indicada en el presente deber?? considerarse una dispensa de violaciones o incumplimientos pasados o subsecuentes. Nada de lo contenido en este Acuerdo deber?? considerarse como algo que limita las acciones o remedios a nuestra disposici??n con respecto de cualquier actividad o conducta prohibida.

<b>Concesi??n de licencia </b>
Mediante el presente concedemos a usted la licencia limitada, no exclusiva, no asignable, no sublicenciable para acceder y usar nuestra Aplicaci??n y las gu??as de usuario, especificaciones o documentos relacionados (la "Documentaci??n"), en apego a los t??rminos y condiciones de este Acuerdo. Esta licencia es solamente para su uso personal no comercial y solamente durante el t??rmino de este Acuerdo. Hasta donde lo permita la legislaci??n o reglamento aplicable sin limitaci??n ni restricci??n, se le otorga el permiso para descargar temporalmente una copia de la App exclusivamente para uso personal no comercial en cada dispositivo m??vil que usted posea o controle. Usted no podr?? distribuir ni poner la App a disposici??n para el uso de otras personas en varios dispositivos al mismo tiempo. Bajo esta licencia, excepto como y s??lo en la medida en que cualquiera de las siguientes restricciones est??n prohibidas por la ley aplicable o cualquiera de las actividades restringidas est??n permitidas por los t??rminos de licencia de cualquier componente de c??digo abierto incorporado en la App, usted no puede:
???    prestar, rentar, arrendar, vender, redistribuir, asignar, sublicenciar o transferir de otra manera la App o el derecho de descargar o utilizar la App;
???    usar la Aplicaci??n para cualquier finalidad comercial o para cualquier exhibici??n p??blica comercial o no comercial;
???    copiar, descompilar, llevar a cabo ingenier??a inversa, desmantelar, intentar derivar el c??digo fuente de la App, cualquier actualizaci??n a la App, o cualquier parte de la App o sus actualizaciones, o intentar hacer cualquier cosa de las anteriores;
???    copiar, modificar o crear trabajos derivados de la Aplicaci??n, la Documentaci??n, cualquier actualizaci??n a la Aplicaci??n o la Documentaci??n, o cualquier parte de la Aplicaci??n, la Documentaci??n o sus actualizaciones;
???    retirar cualquier aviso de derechos de autor u otros avisos de propiedad intelectual de la App, la Documentaci??n, parte de la App o del Sitio Web;
???    transferir el Contenido o materiales de la App o del Sitio Web a otra persona o crear un "espejo" de los mismos en cualquier servidor;
???    eludir, desactivar o de otra manera interferir con las funciones de seguridad de la Aplicaci??n, o las caracter??sticas que evitan o restringen el uso o la copia de cualquier contenido;
???    usar cualquier robot, ara??a o aplicaci??n de b??squeda o extracci??n de sitios web, o cualquier dispositivo o proceso manual o autom??tico para extraer, indexar, recopilar datos, o de cualquier manera reproducir o eludir la estructura de navegaci??n o presentaci??n de la Aplicaci??n;
???    extraer, recolectar o recopilar datos de informaci??n acerca de otros usuarios de la Aplicaci??n;
???    publicar o transmitir cualquier virus, gusano, caballo de Troya u otro elemento perjudicial o disruptivo; o
???    violar cualquier legislaci??n, norma o reglamento aplicable.

Si usted viola cualquiera de estas restricciones, esta licencia se cancelar?? autom??ticamente, y usted podr??a ser enjuiciado por da??os y perjuicios.

<b>Propiedad</b>

HST y sus licenciantes son propietarios del Sitio Web, la Documentaci??n y la Aplicaci??n, incluyendo cualquier material o Contenido que se haya puesto a disposici??n mediante la Aplicaci??n, incluyendo nuestro algoritmo exclusivo, y todos los derechos de propiedad intelectual a nivel mundial sobre lo anterior. Salvo de la manera expresamente permitida en el presente, usted no podr?? copiar, desarrollar a mayor profundidad, reproducir, republicar, modificar, alterar la descarga, publicar, difundir, transmitir o de otra manera usar cualquier material que se haya puesto a disposici??n en la Aplicaci??n. Usted no podr?? retirar, alterar u ocultar ninguna marca de derechos de autor, marca comercial, marca de servicios ni otros avisos de derechos de propiedad incorporados en la Aplicaci??n. Todas las marcas son marcas comerciales o marcas registradas de sus respectivos propietarios. Ninguna parte de este Acuerdo le otorga ning??n derecho para usar ninguna marca comercial, marca de servicios, logotipo o nombre comercial nuestro ni de terceras partes.

Apple, Inc.

Esta disposici??n solamente es aplicable para la versi??n de la App que se usa en dispositivos de Apple Inc. Este Acuerdo es un acuerdo entre usted y nosotros. Apple no tiene ninguna responsabilidad por la App o el contenido de la App, incluyendo reclamaciones por infracci??n de la propiedad intelectual, responsabilidad del producto o el hecho de que la App no cumpla con la legislaci??n aplicable. Hasta donde lo permita la legislaci??n aplicable, Apple no ofrece ninguna garant??a con respecto de la App, y no tiene ninguna obligaci??n de ofrecer soporte con respecto de la App. Todas las reclamaciones con respecto de la App deben ser dirigidas a nosotros y no a Apple. Su uso de la App debe ser en apego con los T??rminos de Servicio de la App Store, y usted deber?? utilizar la App solamente en un dispositivo Apple de su propiedad o bajo su control, seg??n lo permiten tales t??rminos. En caso de que la App incumpla con la garant??a establecida mediante el presente, usted puede notificar a Apple, y Apple le reembolsar?? el precio de compra de la App. Apple ser?? una tercera parte beneficiaria de este Acuerdo, con el derecho de hacer valer este Acuerdo en contra de usted.

<b>Infracci??n</b>

Seg??n lo dispuesto en el Acta Digital del Milenio para los Derechos de Autor de 1998 ("DMCA", por sus siglas en ingl??s), es nuestra pol??tica responder a los propietarios de derechos de autor quienes crean que el material que aparece en la Aplicaci??n infringe sus derechos seg??n lo dispuesto por las leyes sobre derechos de autor de los Estados Unidos. No aceptamos ninguna responsabilidad por ning??n material provisto o publicado por un usuario. Si usted cree que algo de lo que aparece en la Aplicaci??n infringe sus derechos de autor, usted puede enviarnos un aviso solicitando que sea retirado, o que se bloquee el acceso a tal cosa. Si usted cree que tal aviso ha sido presentado en su contra por error, la DMCA le permite enviarnos un contra-aviso. Todos los avisos y contra-avisos deben cumplir con los requisitos de la DMCA. Le sugerimos consultar con su asesor legal antes de presentar un aviso o un contra-aviso. Tenga en mente que pueden existir penalizaciones considerables por las reclamaciones falsas. Es nuestra pol??tica cancelar las cuentas de los infractores recurrentes en las circunstancias apropiadas. Env??e los avisos y contra-avisos support@hstechnology.com.

<b>Limitaciones de responsabilidad</b>

HASTA DONDE LO PERMITA LA LEGISLACI??N APLICABLE, BAJO NINGUNA CIRCUNSTANCIA Y BAJO NINGUNA TEOR??A LEGAL O EQUITATIVA, YA SEA POR AGRAVIO, CONTRATO, ESTRICTA RESPONSABILIDAD U OTRA CAUSA, SEREMOS NOSOTROS, NUESTROS AFILIADOS O CUALQUIERA DE NUESTROS O DE SUS EMPLEADOS, DIRECTORES, OFICIALES, AGENTES, VENDEDORES O PROVEEDORES, RESPONSABLES ANTE USTED NI ANTE NINGUNA TERCERA PARTE POR NINGUNA LESI??N PERSONAL, INCLUYENDO LA MUERTE, NI POR NINGUNA P??RDIDA O DA??O INDIRECTO, ESPECIAL, ACCIDENTAL O CONSECUENTE DE NINGUNA NATURALEZA RESULTANTE DE O EN RELACI??N CON EL USO O LA INCAPACIDAD DE USAR LA APLICACI??N, INCLUYENDO ENTRE OTRAS COSAS, DA??OS POR P??RDIDA DE GANANCIAS, P??RDIDA DE BUEN NOMBRE, P??RDIDA DE DATOS, PARALIZACI??N DE TRABAJOS, EXACTITUD DE RESULTADOS, O FALLA O ANOMAL??A DE LA COMPUTADORA O DISPOSITIVO, A??N Y CUANDO UN REPRESENTANTE DE NOSOTROS HAYA SIDO ADVERTIDO O DEBIERA HABER ESTADO AL TANTO DE LA POSIBILIDAD DE TALES DA??OS. Adem??s de lo anterior, no asumimos ninguna responsabilidad por errores, omisiones, interrupciones, eliminaciones, defectos, retrasos en la operaci??n o fallas en las l??neas de transmisi??n o comunicaci??n. No somos responsables por ning??n problema o anomal??a t??cnica de ninguna red o l??nea telef??nica o celular, sistemas, servidores o proveedores de c??mputo en l??nea, equipamiento de c??mputo, software, falla de cualquier mensaje de correo electr??nico debido a problemas t??cnicos o congesti??n de tr??fico en internet o en el Sitio Web, incluyendo cualquier lesi??n o da??o a los usuarios o a cualquier dispositivo m??vil o de c??mputo de cualquier persona relacionado o resultante de la participaci??n o uso de la Aplicaci??n. Algunas jurisdicciones no permiten la exclusi??n de ciertas garant??as o la limitaci??n o exclusi??n de responsabilidad para ciertos da??os. Por consiguiente, es posible que algunas de las limitaciones y exenciones de responsabilidad anteriormente mencionadas no sean aplicables para usted. Hasta donde no nos sea posible, debido a la legislaci??n aplicable, desconocer cualquier garant??a impl??cita o limitar las responsabilidades, el alcance y la duraci??n de tal garant??a y nuestro grado de responsabilidad ser??n los m??nimos permitidos bajo tal legislaci??n aplicable.

Cualquier reclamaci??n relacionada con el uso de la Aplicaci??n por parte de usted, debe ser presentada dentro de un a??o de la fecha del evento que dio lugar a tal acci??n. Los remedios son exclusivos y se limitan a los expresamente indicados en este Acuerdo, a??n y cuando el remedio aplicable seg??n lo provisto en este Acuerdo no consiguiera su prop??sito esencial.

<b>Indemnidad</b>

Usted acuerda defender, indemnizar y liberar de toda responsabilidad  a HST , incluyendo a sus oficiales, directores, empleados, agentes, subcontratistas, licenciantes y proveedores, a cualquiera de nuestras compa????as u organizaciones afiliadas, y a cualquiera de sus sucesores, cesionarios o licenciatarios, de reclamaciones, acciones o demandas, da??os, p??rdidas, responsabilidades, juicios, convenios, costos o gastos (incluyendo honorarios y gastos de los abogados) resultantes directa o indirectamente de a) el incumplimiento de este Acuerdo por parte de usted o de cualquier persona que use su computadora, dispositivo m??vil, contrase??a o informaci??n de inicio de sesi??n; (b) cualquier reclamaci??n, p??rdida o da??o padecidos a causa del uso o el intento de usar (o la incapacidad de usar) la Aplicaci??n; (c) violaci??n por parte de usted de cualquier legislaci??n o reglamento; o (d) cualquier otra cuesti??n de la cual sea usted responsable seg??n este acuerdo o seg??n la legislaci??n. Usted acepta que su uso de la Aplicaci??n ser?? en cumplimiento con todas las legislaciones, reglamentos y pautas aplicables.

<b>Cancelaci??n</b>

Este Acuerdo permanecer?? en efecto hasta que sea cancelado por usted o por nosotros. Usted podr?? cancelar este Acuerdo en cualquier momento, siempre y cuando suspenda el uso de la Aplicaci??n. Si usted viola este Acuerdo, nuestro permiso para que usted use la Aplicaci??n se cancelar?? autom??ticamente. Podremos, enteramente a nuestro criterio, cancelar este Acuerdo y su acceso a cualquier Aplicaci??n o a todas ellas, en cualquier momento y por cualquier motivo, sin penalizaci??n ni responsabilidad hacia usted ni hacia terceras partes. En caso de que usted incumpla con este Acuerdo, esas acciones ser??n adicionales y no en sustituci??n o limitaci??n de ning??n derecho o remedio que pueda estar a nuestra disposici??n. Al momento de la cancelaci??n del Acuerdo ya sea por parte de usted o nuestra, usted deber?? desinstalar sin demora la App de todos sus dispositivos y destruir todos los materiales descargados y obtenidos de otra forma a trav??s de la Aplicaci??n, toda la Documentaci??n, y todas las copias de tales materiales y Documentaci??n. Las siguientes disposiciones sobreviven al vencimiento o cancelaci??n de este Acuerdo por cualquier motivo: Descargos de responsabilidad, limitaciones de responsabilidad, indemnidad, elecci??n de legislaci??n y jurisdicci??n, acuerdo completo y divisibilidad.

<b>Elecci??n de legislaci??n y jurisdicci??n</b>

Este acuerdo estar?? regido en todos los respectos por las leyes del Estado de California, con exclusi??n de sus disposiciones de elecci??n de legislaci??n y conflicto de leyes. En caso de cualquier reclamaci??n o acci??n por parte de usted que resulte directa o indirectamente de este Acuerdo o con relaci??n con la Aplicaci??n, usted acepta irrevocablemente someterse exclusivamente a la jurisdicci??n de las cortes situadas en el Condado de Orange, California. Usted renuncia al derecho a cualquier objeci??n de jurisdicci??n, de sede o de inconveniencia del foro ante cualquiera de las cortes que pudiera tener jurisdicci??n.

<b>Acuerdo completo</b>

Este Acuerdo constituye la totalidad de su acuerdo con relaci??n al objeto del presente. Cualquier cosa contenida o enviada a trav??s de la Aplicaci??n que sea inconsistente o entre en conflicto con los t??rminos de este Acuerdo quedar?? sin efecto en favor de los t??rminos de este Acuerdo. Este Acuerdo no podr?? ser modificado, en su totalidad ni en parte, salvo de la manera descrita en las dem??s secciones de este Acuerdo.

<b>Divisibilidad</b>

Si cualquiera de las disposiciones de este Acuerdo fuera considerada como no v??lida por una corte u otro tribunal de jurisdicci??n competente, entonces tales disposiciones ser??n enmendadas, limitadas o eliminadas en la menor medida necesaria para que este Acuerdo permanezca en pleno efecto y vigor

<b>Transferibilidad</b>

Usted est?? de acuerdo en que este Acuerdo y todos los acuerdos incorporados entre usted y nosotros solo podr??n ser transferidos por nosotros a terceras partes, enteramente a nuestro criterio.

<b>Informaci??n de contacto</b>

Todos los avisos dirigidos a usted relacionados con este Acuerdo se publicar??n en la Aplicaci??n o se enviar??n a su direcci??n de correo electr??nico o postal, si es que nos la proporcion??. Todos los avisos dirigidos a nosotros relacionados con este Acuerdo deber??n enviarse por escrito a la siguiente direcci??n:

HSTechnology Solutions, Inc.
23382 Mill Creek Drive Suite 200
Laguna Hills, CA 92653

support@hstechnology.com.

Se considerar?? como recibido el aviso una vez que este sea publicado en la Aplicaci??n o cuando se env??e el mensaje por correo electr??nico, a menos que la parte remitente sea notificada de que la direcci??n de correo electr??nico no es v??lida. A menos de que la correspondencia postal sea regresada al remitente, el aviso se considerar?? recibido despu??s de tres d??as de haber sido enviada la correspondencia postal para el caso de correo nacional, o siete d??as despu??s de haber sido enviada la correspondencia postal para el caso de correo internacional.

??ltima actualizaci??n: Noviembre de 2017
`,
      APPLY_FILTER: "Aplicar filtro",
      SORT_BY: "Clasificar por",
      DISTANCE: "Distancia",
      QUALITY_RATING: "Puntaje por calidad",
      PRICE_RATING: "Puntaje por precio",
      NAME: "Nombre",
      PRICE_RANGE: "Rango de precios",
      ESTIMATED_CHARGE_RANGE: "Rango estimado de carga",
      MILES: "millas",
      MILES_2: "millas",
      PATIENTS_TREATED: "Pacientes tratados",
      YOUR_ESTIMATED_COST: "Su cargo estimado",
      DETAILS: "Detalles",
      GENERAL: "Generales",
      AVERAGE_LENGTH_OF_STAY: "Duraci??n promedio de la estad??a",
      DAYS: "d??as",
      AVERAGE_COST_AT_THIS_FACILITY: "Costo promedio en este establecimiento",
      TOTAL_OUT_OF_POCKET_COSTS: "Total de costos de bolsillo",
      CO_PAY: "Copago",
      IF_NOT_MET_YET: "(si a??n no lo ha agotado)",
      CO_INSURANCE: "Coseguro",
      YOUR_ESTIMATED_SHARE_OF_COSTS:
        "(su participaci??n estimada en los costos) ",
      YOUR_COST: "Su costo ",
      CALL_NOW: "Llamar ahora",
      ESTIMATED_PLAN_PAYMENT: "Pago estimado del plan",
      YOUR_OUT_OF_POSCKET_COST_RANGE: "Su rango de costos de bolsillo",
      VBP_ACCEPTANCE: "Tasa de aceptaci??n de VBP",
      HCBB_PROCEDURE_RATING: "Clasificaci??n de procedimientos HCBB",
      HCBB_QUALITY_RATING: "HCBB Calificaci??n de calidad",
      GET_DIRECTION: "Obtenga instrucciones para llegar",
      GET_DIRECTIONS: "Obtenga instrucciones para llegar",
      NO_PROVIDERS_FOUND: "No se encontraron proveedores",
      FIND_A_DOCTOR: "Busque un m??dico",
      FIND_HOSPITAL: "Busque un hospital",
      FIND_PROCEDURE: "Busque un procedimiento",
      FIND_BY_NAME: "Busque por nombre",
      SPECIALIZATION: "Especialidad",
      VIEW_MAP: "Ver mapa",
      SET_PCP: "Configurar como m??dico de cabecera",
      PCP_SET_SUCCESS: "PCP elegido con ??xito",
      NOT_AVAILABLE: "No disponible",
      BENEFITS: "Beneficios",
      MY_PLAN_INFO: "Informaci??n de mi plan",
      MY_PLAN_INFO_DETAIL: "Informaci??n de mi plan",
      MY_INSURANCE_INFO: "Mi Informe del Seguro",
      RBP_NETWORK: "Red RBP",
      OTHER_NETWORK: "Otra red",
      MEDICAL: "M??dicos",
      CALENDAR: "Calendario",
      DEDUCTIBLE: "Deducible ",
      USED: "Utilizada",
      INDIVIDUAL: "Individual",
      FAMILY: "Familiar",
      OUT_OF_POCKET_LIMIT: "L??mite de gastos de bolsillo",
      PHYSICIAN_SERVICES: "Servicios del m??dico",
      PREVENTIVE: "Preventivo",
      COPAY: "Copago",
      NOTES: "Observaciones",
      MAY_ALWAYS_BE_ZERO_IN_NETWORK: "Podr??a ser siempre cero en la red",
      PCP_OFFICE_VISIT: "Consulta en consultorio del PCP",
      SPECIALIST: "Especialista",
      REFERRAL_NEEDED: "Se necesita una derivaci??n",
      URGENT_CARE: "Atenci??n de Urgencias",
      CHIROPRACTOR: "Quiropr??ctico",
      VISITS_YEAR: "consultas/a??o",
      MENTAL_HEALTH: "Salud Mental",
      BALANCE_BILL: "Cargar Factura de Saldo",
      PRE_CERT_REQUIRED_30_DAY_LIMIT:
        "Se necesita precertificaci??n, l??mite de 30 d??as",
      INPATIENT_HOSPITAL: "Hospital de internaci??n",
      AFTER_DEDUCTIBLE: "despu??s del deducible",
      OUTPATIENT_SURGERY: "Cirug??a ambulatoria",
      EMERGENCY_ROOM: "Sala de Emergencias",
      DIAGNOSTIC_TESTS: "Pruebas diagn??sticas",
      LAB: "An??lisis cl??nicos",
      X_RAY: "Radiograf??as",
      HIGH_TECH_IMAGING: "Im??genes de alta tecnolog??a",
      RX_COPAY_TYPES: "Tipos de copago para radiograf??as",
      REGULAR_RX_COVERAGE: "Cobertura regular de radiograf??as",
      GENERIC: "Gen??rico",
      PREFERRED: "Preferido",
      BRAND: "Marca",
      SPECIALITY: "De especialidad",
      MAIL_ORDER_RX_COVERAGE: "Cobertura de medicamentos Rx pedidos por correo",
      VIEW_PLAN_SUMMARY: "Ver resumen del plan",
      VIEW_EDIT_CARD_PHOTO: "Ver/editar foto de la tarjeta",
      SHOW_RED_CARD: "Ver Tarjeta",
      RED_CARD: "TARJETA ROJA",
      GENERAL_INFO: "Informaci??n general",
      DATE_OF_BIRTH: "Fecha de nacimiento",
      GENDER: "Sexo",
      COMPLETE_ATTACHMENT: "Archivo Adjunto Completo",
      GROUP_NUMBER: "N??mero de grupo",
      PLAN_NAME: "Nombre del plan",
      MEMBER_SERVICES: "Servicios para afiliados",
      RX_SERVICES: "Servicios de radiograf??a",
      PHARMACY_BENEFITS_INFO: "Informaci??n sobre los beneficios de farmacia",
      RX_BIN: "BIN de  radiograf??a",
      RX_CARRIER: "Proveedor de radiograf??a",
      CURRENT_COVERAGE_INFO: "Informaci??n sobre la cobertura actual",
      COVERAGE_LEVEL: "Nivel de cobertura",
      COVERAGE_PERIOD: "Per??odo de cobertura",
      COVERAGE_STATUS: "Estado de la cobertura",
      ACTIVE: "Activa",
      MEMBER_AND_CURRENT_BENEFITS: "Beneficios del afiliado y actuales",
      DENTAL: "Odontol??gicos",
      VISION: "Oftalmol??gicos",
      SPOUSE: "C??nyuge",
      CHILD: "Hijos",
      MEMBER: "afiliado",
      EMAIL_INFO_TO_PROVIDER:
        "Enviar informaci??n al proveedor por correo electr??nico",
      UPLOAD_PHOTO: "SUBIR FOTO",
      SEND: "Enviar",
      MORE_INFORMATION: "Mas informacion",
      SEND_INFO: "Enviar informaci??n",
      TAKE_PHOTO: "Tomar una foto",
      SELECT_PHOTO: "Seleccionar una foto",
      QUESTION_ABT_YOUR_HEALTH_PLAN:
        "Preguntas sobre su plan de salud, la inscripci??n y la elegibilidad",
      QUESTIONS_ABT_SPECIFIC_CLAIMS_AND_COVERAGE:
        "Preguntas sobre reclamaciones espec??ficas y la cobertura",
      WHAT_PHYSICIANS_ARE_IN_NETWORK: "??Qu?? m??dicos pertenecen a la red? ",
      YOU_HAVE_RECEIVED_BALANCE_BILL: "Recibi?? una factura por el saldo",
      HUMAN_RESOURCES: "Recursos Humanos",
      FAX: "Fax",
      PATIENT_ADVOCACY_CENTER:
        "Centro de Defensa de los Derechos de los Pacientes",
      REGISTER: "Inscribirse",
      STEP_1_4: "Paso 1 de 4",
      FIRST_NAME: "Nombre",
      LAST_NAME: "Apellido",
      CANNOT_COTAIN_SPACES: "No puede contener espacios",
      CREATE_PASSWORD: "Crear clave",
      CONFIRM_PASSWORD: "Confirmar clave",
      ANSWER: "Respuesta",
      EMAIL_ADDRESS: "Direcci??n de correo electr??nico",
      AGREE_TO_CONTINUE: "Acepte para continuar",
      REGISTRATION: "Inscripci??n",
      REVIEW_YOUR_INFO: "Revise su informaci??n",
      PERSONAL: "Personal",
      SUCCESSFULLY_REGISTERED: "Se inscribi?? con ??xito",
      CHANGE_EMAIL: "Cambiar correo electr??nico",
      MESSAGE_SEND_SUCCES: "Mensaje enviado correctamente.",
      ADD_ATTACHMENT: "Adjuntar Archivo",
      CONTACT: "Cont??ctenos",
      VBP_NETWORK: "Red de VBP",
      REMOVE_PHOTO: "Borrar foto",
      CONFIRM_MESSAGE_DELETE: "Haga clic en OK para eliminar el mensaje.",
      CONFIRM_MESSAGE_DELETE_ALL:
        "Haga clic en OK para eliminar todos los mensajes.",
      CONFIRM_MESSAGE_DELETE_FILE: "Haga clic en Ok para eliminar este archivo",
      IMAGE_ADD_UPDATE_DELETE_CARD:
        "Haga clic en la imagen para agregar/actualizar o borrar la imagen de la tarjeta de seguro",
      FRONT_SIDE_OF_CARD: "Parte frontal de la tarjeta",
      TAKE_LANDSCAPEMODE_PHOTO_NOTE:
        "Tome la foto en modo apaisado (landscape) para que se vea toda la tarjeta",
      BACK_SIDE_OF_CARD: "Parte posterior de la tarjeta",
      NO_QUALITY_RATINGS: "No hay calificaciones de calidad disponibles",
      NOT_PROVIDED: "No se proporciona",
      FOUND: "Encontrado",
      KEYWORD_SEARCH: "Buscar palabra clave",
      PROCEDURE_SYNOPSIS: "Sinopsis del procedimiento",
      SYNOPSIS: "SINOPSIS",
      PROCEDURE_INFORMATION: "Informaci??n del procedimiento",
      SET_MAP_LOCATION: "Establecer la ubicaci??n en el mapa",
      YOUR_EST_COST: "Su costo estimado",
      LOADING_MESSAGE_DELETE: "Elmininando mensaje..",

      /* NEED SPANISH TEXT */

      ZIP: "C??digo Postal",
      STATE: "Estado",
      CITY: "Ciudad",
      TAKE_LANDSCAPE_IMAGE_NOTES:
        "Tome la foto en modo apaisado (landscape) para que se vea toda la imagen",
      CALENDAR_OR_PLANYEAR: "A??o del Plan",

      CAMERA_GALLERY: "Galer??a de fotos de la c??mara",
      SEARCH_RESULTS: "Resultados de la b??squeda",
      NO_MESSAGES_AVAILABLE: "No hay mensajes",
      DELETE: "Borrar",
      CANCEL: "Cancelar",
      DELETEALL: "Borrar todo",
      HOME: "Inicio",
      HOME_PAGE: "P??gina de inicio",
      MY_BENEFITS: "Mis beneficios",
      PRICE_A_PROCEDURE: "Cotizar un procedimiento",
      FIND_DOCTOR: "Buscar un m??dico",
      CONTACT_INFORMATION: "Informaci??n de contacto",
      PHONE_NUMBER: "N??mero de tel??fono",
      MUST_6:
        "Debe tener como m??nimo 6 caracteres: al menos 1 may??scula, 1 min??scula y 1 n??mero",
      /*DOWNLOADING : 'Descargando ',*/
      MY_PROFILE: "Mi Perfil",
      CURRENT_PASSWORD: "Clave actual",
      NEW_PASSWORD: "Clave nueva",
      MESSAGE_DETAILS: "Detalles del mensaje",
      SELECT_LOCATION: "Seleccione la ubicaci??n",
      ENTER_VALID_EMAIL: "Ingrese una direcci??n de correo electr??nica v??lida",
      PLEASE_FILL_REQUIRED_FIELDS: "Complete todos los campos obligatorios",
      EMAIL_UPDATED_SUCCESSFULLY:
        "Se actualiz?? la direcci??n de correo electr??nico",
      INVALID_DATA: "Datos inv??lidos",
      MEMBER_INFO_UPDATED_SUCCESSFULLY:
        "Se actualiz?? la informaci??n del afiliado",
      ERROR_WHILE_UPDATING_MEMBER_INFO:
        "Error en la actualizaci??n de la informaci??n del afiliado",
      PLAN_INFORMATION: "Informaci??n del plan",
      MY_INSURANCE_CARD: "Mi tarjeta de seguro",
      MY_INSURANCE_CARD_PHOTO: "Mi foto de la tarjeta del seguro",
      EDIT_PHOTO: "Editar la foto",
      LOADING_CALL_INSURANCE_INFO:
        "Cargando la informaci??n para llamar al seguro???",
      SEARCHING_DOCTORS: "Buscando m??dicos???",
      SEARCHING_HOSPITALS: "Buscando hospitales???",
      LOADING: "Cargando???",
      LOADING_SEND_MESSAGE: "Enviando mensaje . .",
      DELETING_MESSAGE: "Borrando el mensaje???",
      LOADING_MESSAGES: "Cargando los mensajes???",
      LOADING_INSURANCE_CARD_INFO:
        "Cargando la informaci??n de la tarjeta de seguro???",
      LOADING_PLAN_INFORMATION: "Cargando la informaci??n del plan???",
      LOADING_INFORMATION: "Cargando informaci??n . .",
      DOWNLOADING: "Descargando???",
      SEARCHING_PROCEDURES: "Buscando procedimientos???",
      LOADING_PROFILE_INFO: "Cargando la informaci??n del perfil???",
      UPDATING_MEMBER_INFO: "Actualizando la informaci??n del afiliado???",
      VALIDATING: "Validando???",
      LOADING_YOUR_DOCTOR_INFO: "Cargando la informaci??n de su m??dico???",
      ENTER_YOUR_LOCATION:
        "No se pudo obtener la ubicaci??n actual. Ingrese su ubicaci??n.",
      ENTERED_INCORRECT_ADDRESS: "La direcci??n ingresada es incorrecta",
      PCP_SET_SUCCESSFULLY: "Se estableci?? el PCP.",
      UNABLE_TO_SET_PRIMARY_CARE_PHYSICIAN:
        "No se puede establecer como m??dico de cabecera (PCP)",
      SELECT_ONE_PRICE_FILTER: "Seleccione al menos un filtro por precio",
      SELECT_ONE_QUALITY_FILTER: "Seleccione al menos un filtro por calidad",
      PLEASE_FILL_REQUIRED_DETAILS: "Complete los detalles obligatorios",
      RECORDS_NOT_MATCHED: "Los registros no coinciden",
      MESSAGE_DELETED_SUCCESSFULLY: "Se ha borrado el mensaje",
      PASSWORD_UPDATED_SUCCESSFULLY: "Se ha actualizado la clave",
      INVALID_USER_DATA: "Datos del usuario inv??lidos",
      PASSWORDS_MUST_MATCH: "Las claves deben coincidir",
      MUST_1: "Las claves deben contener 1 may??scula, 1 min??scula y 1 n??mero",
      UNABLE_GET_USER_AGREEMENT: "No se puede obtener el contrato del usuario",
      SUCCESSFULLY_REGISTERED: "Se ha registrado con ??xito",
      INVALID_REGISTRATION_DATA: "Datos de registro inv??lidos",
      ARE_YOU_SURE_ENABLE_LOCATION_SERVICE:
        "??Est?? seguro de que quiere activar el servicio de localizaci??n?",
      ARE_YOU_SURE_GRANT_LOCATION_SERVICE:
        "??Est?? seguro de que quiere autorizar el servicio de localizaci??n?",
      DO_YOU_WANT_TO_SET: "??Quieres establecer ",
      PRIMARY_CARE_PHYSICIAN: " como m??dico de atenci??n primaria?",

      FACILITY_ACCEPTANCE: "Aceptaci??n VDHP",
      PROCESSED_DATE : "Processed Date - Newestto Oldest",

      TITLE_BACKGROUND_MODE: "Trabajando en segundo plano ...",
      DESC_BACKGROUNND_MODE: "No cierre la aplicaci\u00f3n por favor.",
      VERSION: "Versi??n",
      PRESCRIPTION_PRICING: "Precio de los medicamentos recetados",
      MY_CLAIMS: "Ver reclamaciones",
      DISCLAIMER: `La informaci??n del proveedor contenida en este Directorio fue actualizada por ??ltima vez Date y por lo tanto puede tener
			cambiado. Antes de programar su cita o recibir servicios, consulte con el proveedor para confirmar
			la participaci??n en la red, la ubicaci??n y si el proveedor est?? aceptando nuevos pacientes`,
      PRACTICENAME: "Nombre practico",
      BANER_TEXT:
        "Debido al mantenimiento programado del servidor, los sitios web y las aplicaciones de HST (incluida la aplicaci??n m??vil) no estar??n disponibles a partir del viernes 10 de diciembre a las 18:00 horas PST y se reanudar??n el domingo 12 de diciembre a las 18:00 horas PST.",
      BANER_TEXT_PRICE:
        "La herramienta de precios de las recetas se ha desconectado temporalmente mientras trabajamos en un esfuerzo de limpieza. Volveremos a habilitar la funcionalidad m??s adelante",
    });
});
